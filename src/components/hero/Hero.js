import { useState, useEffect } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
// import circleVector1 from '../../assets/img/circleVector1.svg';
// import circleVector2 from '../../assets/img/circleVector2.svg';
// import circleVector3 from '../../assets/img/circleVector3.svg';
import circleVec1 from '../../assets/img/circleVec1.svg';
import circleVec2 from '../../assets/img/circleVec2.svg';
import circleVec3 from '../../assets/img/circleVec3.svg';
import circleVec4 from '../../assets/img/circleVec4.svg';
import 'animate.css';
import './hero.css';



export default function Hero () {

  const textRotate = ['Junior Developer', 'Sound Designer', 'Cat Fanatic!'];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  // state to track when user is scrolling
  const [scrolled, setScrolled] = useState(false);


  // triggered when user scrolls
  useEffect(() => {
    // function to update scrolling state
    const onScroll = () => {
    // check if user has scrolled more than 50px
    if (window.scrollY > 50) {
      // set state to true
      setScrolled(true)
    } else {
      // set state to false
      setScrolled(false)
    }
    }
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
  }, []);


  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prevPhrase =>
        (prevPhrase + 1) % textRotate.length
      );
    }, 5000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, );

  return (
    <section id="home" className={scrolled ? 'scrolled' : ''}>
      <div className='hero'>
      
        <div className="hero-container">

          <div className='hero-animation-container'>
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
      </div>
    </section>
  )
}