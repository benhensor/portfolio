import { useState, useEffect } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import circleVec1 from '../../assets/img/circleVec1.svg';
import circleVec2 from '../../assets/img/circleVec2.svg';
import circleVec3 from '../../assets/img/circleVec3.svg';
import circleVec4 from '../../assets/img/circleVec4.svg';
import 'animate.css';
import './hero.css';



export default function Hero () {

  const textRotate = ['Junior Developer', 'Sound Designer', 'Cat Fanatic!'];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prevPhrase =>
        (prevPhrase + 1) % textRotate.length
      );
    }, 5000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, );

  return (
    <section id="home">
      <div className='hero'>
        <div className="hero-container">
          <div id='hero-animation-container'>
            <img className='circleVector1' src={circleVec1} alt='circle vector' />
            <img className='circleVector2' src={circleVec2} alt='circle vector' /> 
            <img className='circleVector3' src={circleVec3} alt='circle vector' />
            <img className='circleVector4' src={circleVec4} alt='circle vector' /> 
          </div>

          <div className='hero-titles'>
            <div className='hero-content'>
            <div className="hero-content-text">
            <span className='tagline'>Welcome to my Portfolio</span>
            <div className="name-container">
            <h1 className='name'>Ben Hensor</h1>
            </div>
            <div className='text-phrases'>
                {textRotate.map((phrase, index) => (
                  <h2
                    key={index} 
                    className={`text-phrase ${index === currentPhrase ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutRight'}` }
                  >
                    {phrase}
                  </h2>
                ))}
              </div>
            </div>

            <p>Thank you for visiting!</p>
            
            </div>

          </div>
          <a href="#connect"><button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button></a>
        </div>
          <div className="hero-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35"
              className="stroke-fill"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
          </div>
      </div>
    </section>
  )
}