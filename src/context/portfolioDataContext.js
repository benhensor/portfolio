import React, { createContext, useState, useEffect  } from "react";
import { fetchPortfolioData } from "../api/fetchPortfolioData";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [heroPhrases, setHeroPhrases] = useState(null);
  const [aboutInfo, setAboutInfo] = useState(null);
  const [journeyInfo, setJourneyInfo] = useState(null);
  const [contactStatement, setContactStatement] = useState(null);
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchPortfolioData();
      setHeroPhrases(data.heroPhrases);
      setAboutInfo(data.aboutInfo);
      setJourneyInfo(data.journeyInfo);
      setContactStatement(data.contactStatement);
      setProjects(data.projects);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PortfolioContext.Provider value={{ heroPhrases, aboutInfo, journeyInfo, contactStatement, projects, isLoading, error }}>
      {children}
    </PortfolioContext.Provider>
  );

};

export const usePortfolioContext = () => React.useContext(PortfolioContext);