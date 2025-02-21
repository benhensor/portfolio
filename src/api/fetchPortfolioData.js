export const fetchPortfolioData = async () => {
  const apiURL = process.env.REACT_APP_API_URL;

  if (!apiURL) {
    throw new Error('API URL is not defined in environment variables');
  }

  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchPortfolioData:', error);
    throw error;
  }
};