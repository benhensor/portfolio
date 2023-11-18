import React, { useState, useEffect } from 'react'
import navIcon1 from '../assets/icons/nav-icon1.svg'
import navIcon2 from '../assets/icons/nav-icon2.svg'
import navIcon3 from '../assets/icons/nav-icon3.svg'
import navIcon5 from '../assets/icons/nav-icon5.svg'
import { JourneyWave } from './Waves'
import { journey } from '../data'
import '../styles/journey.css'


export default function Journey () {

    const [tabletView, setTabletView] = useState(false)

    const oddIndices = journey.filter((item, index) => index % 2 !== 0)
    const evenIndices = journey.filter((item, index) => index % 2 === 0)

    useEffect(() => {
        const handleResize = () => {
            setTabletView(window.innerWidth < 1024)
        }

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const JourneyLink = ({ link, icon, description }) => (
        <div className='journey-link'>
            <a href={link} rel='noreferrer' target='_blank'>
                <img src={icon} alt={description} />
            </a>
            <h3 className='journey-link-description'>{description}</h3>
        </div>
    )

    return (
        <section id='journey'>
            <div className='journey-background-mask'></div>
                <div className='journey-container'>
                    <div className='journey-header'>
                        <h1>My Journey</h1>
                    </div>

                    <div className='journey-content'>
                        {tabletView ? ( 
                            <>  
                                
                                <div className='journey-column-one'>
                                    {journey.map((item) => {
                                    return (
                                        <div className='block' key={item.key}>
                                        <div className='block-text'>
                                            <p>{item.text}</p>
                                        </div>
                                        </div>
                                    )
                                    })}
                                </div>

                                <div className='journey-column-two'>
                                    <div className='journey-links'>
                                        <div className='journey-icons'>
                                            <JourneyLink link='https://github.com/benhensor' icon={navIcon1} description='Github' />
                                            <JourneyLink link='https://www.linkedin.com/in/benhensor/' icon={navIcon2} description='LinkedIn' />
                                            <JourneyLink link='https://www.imdb.com/name/nm5978088/?ref_=rvi_nm' icon={navIcon3} description='IMDb' />
                                            <JourneyLink link='#connect' icon={navIcon5} description='Connect with me!' />
                                        </div>                          
                                    </div>                       
                                </div>               
                            </>
                        ) : (
                            <>
                                <div className='journey-column-one'>
                                    {evenIndices.map((item) => (
                                        <div className='block' key={item.key}>
                                            <div className='block-text'>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='journey-column-two'>
                                    {oddIndices.map((item) => (
                                        <div className='block' key={item.key}>
                                            <div className='block-text'>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className='journey-links'>
                                        <div className='journey-icons'>
                                            <JourneyLink link='https://github.com/benhensor' icon={navIcon1} description='Github' />
                                            <JourneyLink link='https://www.linkedin.com/in/benhensor/' icon={navIcon2} description='LinkedIn' />
                                            <JourneyLink link='https://www.imdb.com/name/nm5978088/?ref_=rvi_nm' icon={navIcon3} description='IMDb' />
                                        </div>
                                        <a href='#connect'><button className='journey-connect-button' onClick={() => console.log('connect')}><span>Let's Connect!</span></button></a>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>               
                </div>
            <JourneyWave />
        </section>
    )
}