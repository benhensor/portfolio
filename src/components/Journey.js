import React from 'react'
import Wave from './Wave'
import { Section, Container, BGWord } from '../styles/GlobalStyles'
import { journey } from '../data'
import RightArrow from './icons/RightArrow'
import Education from './icons/Education'
import Work from './icons/Work'
import styled from 'styled-components'

// Color mapping function
const getEventColor = (key) => {
  const colorMap = {
    1: 'var(--1st-event)',
    2: 'var(--2nd-event)',
    3: 'var(--3rd-event)',
    4: 'var(--4th-event)',
    5: 'var(--5th-event)',
    6: 'var(--6th-event)',
    7: 'var(--7th-event)',
    8: 'var(--8th-event)'
  }
  return colorMap[key] || 'var(--blue)' // fallback to original blue color
}

const downloadPDF = () => {
  const link = document.createElement('a')
  link.href = '/api/serve-cv.php'
  link.click()
}

export default function Journey() {
  return (
    <Section id="journey">
      <BGWord>JOURNEY</BGWord>
      <Container id="journey-container">
        <Timeline>
          <div className="vertical-line"></div>
          {journey.events.map((event) => (
            <Event 
              key={event.key} 
              className={`${event.key % 2 === 0 ? 'left' : 'right'}`}
              $eventKey={event.key}
            >
              <div className="row">
                <div className="event-date">
                  <span>{event.date}</span>
                </div>
                <div className="spacer-opposite"></div>
              </div>
              <div className="row">
                <div className="event-point-line-icon">
                  <div className="spacer-event-line"></div>
                  <div className="event-arrow">
                    <RightArrow />
                  </div>
                  <div className="event-dotted-line">
                    <div className="event-icon-container">
                      <div className="event-icon">
                        {event.type === 'education' ? <Education /> : <Work />}
                      </div>
                    </div>
                    <div className="event-icon-arrow">
                      <RightArrow />
                    </div>
                  </div>
                </div>
                <div className="event-point"></div>
                <div className="spacer-opposite"></div>
              </div>
              <div className="row">
                <div className="event-content-container">
                  <div className="event-content">
                    <p className="event-title">{event.title}</p>
                    <p className="event-provider">{event.provider}</p>
                    <p className="event-description">{event.description}</p>
                  </div>
                </div>
                <div className="spacer-opposite"></div>
              </div>
            </Event>
          ))}
          <div className="row">
            <Button
              type="button"
              aria-label="Download CV as PDF"
              onClick={downloadPDF}
            >
              Download CV
            </Button>
          </div>
        </Timeline>
      </Container>
      <Wave section={'journey'} transform="none" width="calc(180% + 3px)" />
    </Section>
  )
}

const Timeline = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .vertical-line {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: .5rem;
    height: 100%;
    border-radius: 25px;
    background: var(--timeline-gradient);
    z-index: 0;
  }
`

const Event = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: -4rem;
  .row {
    display: flex;
    flex-direction: ${props => props.className === 'right' ? 'row' : 'row-reverse'};
    justify-content: space-between;
    align-items: center;
  }

  .spacer-opposite {
    flex: 1;
  }
  .event-date {
    flex: 1;
    margin-left: ${props => props.className === 'left' ? '6rem' : '0'};
    margin-right: ${props => props.className === 'right' ? '6rem' : '0'};
    text-align: ${props => props.className === 'left' ? 'left' : 'right'};
    font-size: var(--text-s);
    color: var(--orange);
    z-index: 3;
  }
  
  .event-point-line-icon {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: ${props => props.className === 'left' ? 'row' : 'row-reverse'};
    justify-content: ${props => props.className === 'left' ? 'flex-start' : 'flex-start'};
    gap: .5rem;
  }
    
  .event-point {
    width: 2rem;
    height: 2rem;
    max-width: 2rem;
    background: #111;
    border: .4rem solid ${$props => getEventColor($props.$eventKey)};
    border-radius: 50%;
    z-index: 3;
  }
  
  .event-arrow {
    display: flex;
    align-items: center;
    width: 1rem;
    fill: ${$props => getEventColor($props.$eventKey)};
    transform: ${props => props.className === 'right' ? 'rotate(180deg)' : 'rotate(0)'};
  }
  
  .event-dotted-line {
    flex: 1;
    display: flex;
    flex-direction: ${props => props.className === 'right' ? 'row' : 'row-reverse'};
    align-items: center;
    max-width: 50rem;
    height: 0; 
    border-top: 2px dashed var(--text-color-soft);
    position: relative;
    
    .event-icon-container {
      width: 5rem;
      height: 5rem;
      background: var(--text-color-lt);
      border-radius: 50%;
      background-color: ${$props => getEventColor($props.$eventKey)};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .event-icon {
      width: 4.2rem;
      height: 4.2rem;;
      background: var(--text-color-lt);
      border-radius: 50%;
      background-color: var(--text-color-lt);
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
      svg {
        width: 3rem;
        fill: var(--text-color-mdDk);
      }
      
    }
    .event-icon-arrow {
      position: relative;
      margin-bottom: .2rem;
      margin-left: ${props => props.className === 'left' ? '0' : '-.3rem'};
      margin-right: ${props => props.className === 'right' ? '0' : '-.3rem'};
      display: flex;
      align-items: center;
      width: 1rem;
      fill: ${$props => getEventColor($props.$eventKey)};
      transform: ${props => props.className === 'left' ? 'rotate(180deg)' : 'rotate(0)'};
    }

    @media only screen and (max-width: 929px) {
      .event-icon-container {
        width: 3rem;
        height: 3rem;
        background: var(--text-color-lt);
        border-radius: 50%;
        background-color: ${$props => getEventColor($props.$eventKey)};
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .event-icon {
        width: 2.2rem;
        height: 2.2rem;;
        background: var(--text-color-lt);
        border-radius: 50%;
        background-color: var(--text-color-lt);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
        svg {
          width: 2rem;
          fill: var(--text-color-dk);
        }
        
      }
      .event-icon-arrow {
        position: relative;
        margin-bottom: .2rem;
        margin-left: ${props => props.className === 'left' ? '0' : '-.3rem'};
        margin-right: ${props => props.className === 'right' ? '0' : '-.3rem'};
        display: flex;
        align-items: center;
        width: 1rem;
        fill: ${$props => getEventColor($props.$eventKey)};
        transform: ${props => props.className === 'left' ? 'rotate(180deg)' : 'rotate(0)'};
      }
    }

    
  }
  
  .event-content-container {
    flex: 1;
    margin-top: 1rem;
    margin-left: ${props => props.className === 'left' ? '6rem' : '0'};
    margin-right: ${props => props.className === 'right' ? '6rem' : '0'};
    text-align: ${props => props.className === 'left' ? 'left' : 'right'};
    display: flex;
    flex-direction: column;
    z-index: 3;
  }
  
  .event-content {
    align-self: ${props => props.className === 'left' ? 'flex-start' : 'flex-end'};
    width: fit-content;
    border-radius: 15px;
  }
  
  .event-title {
    font-size: var(--text-r);
    text-transform: uppercase;
    color: var(--ltOrange);
  }
  
  .event-provider {
    font-size: var(--text-r);
  }
  
  .event-description {
    align-self: ${props => props.className === 'left' ? 'flex-start' : 'flex-end'};
    font-size: var(--text-s);
    color: var(--text-color-md);
    line-height: 1.5;
    max-width: 30rem;
  }

  @media only screen and (max-width: 746px) {
    margin-bottom: -6rem;
  }
  @media only screen and (max-width: 450px) {
    margin-bottom: -8rem;
  }
`

const Button = styled.button`
  margin: 2rem 2rem 0 0;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  background: var(--orange);
  color: var(--black);
  border: none;
  border-radius: 5px;
  z-index: 3;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    background: var(--ltOrange);
  }
`