import React, { useState, useEffect } from 'react';
import catFace from '../../assets/img/catFaceBanner.png';
import leftEye from '../../assets/img/leftEye.svg';
import rightEye from '../../assets/img/rightEye.svg';
import mailIcon from '../../assets/icons/mailPlane.svg';
import './contact.css';



export default function Contact () {

  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('SEND')
  const [status, setStatus] = useState({})
  const [scrolled, setScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);



  useEffect(() => {
    
    const onScroll = () => {
    if (window.scrollY > 3500) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
    }
      window.addEventListener('scroll', onScroll);
  
      return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }




  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Sending...')
    let response = await fetch('http://localhost:5001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails)
      })
      setButtonText('SEND')
      let result = await response.json()
      setFormDetails(formInitialDetails)
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully!'})
        setTimeout(() => {
        setStatus({});
        }, 2000);
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'})
        setTimeout(() => {
          setStatus({});
        }, 2000);
      }
  }



  useEffect(() => {
    const onResize = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);


  useEffect(() => {
    if (screenWidth >= 1024) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }


    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenWidth]);



  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    // Get the eye elements and their bounding boxes
    const leftEye = document.querySelector('.cat-leftEye');
    const rightEye = document.querySelector('.cat-rightEye');
    const leftEyeBoundingBox = leftEye.getBoundingClientRect();
    const rightEyeBoundingBox = rightEye.getBoundingClientRect();
  
    // Calculate the center positions of the eyes
    const leftEyeCenterX = leftEyeBoundingBox.left + leftEyeBoundingBox.width;
    const leftEyeCenterY = leftEyeBoundingBox.top + leftEyeBoundingBox.height * 4;
    const rightEyeCenterX = rightEyeBoundingBox.left + rightEyeBoundingBox.width;
    const rightEyeCenterY = rightEyeBoundingBox.top + rightEyeBoundingBox.height * 4;
  
    // Calculate the distance between the mouse and the eye centers
    const leftEyeDeltaX = mouseX - leftEyeCenterX;
    const leftEyeDeltaY = mouseY - leftEyeCenterY;
    const rightEyeDeltaX = mouseX - rightEyeCenterX;
    const rightEyeDeltaY = mouseY - rightEyeCenterY;
  
    const maxEyeMove = 40; // Adjust this value to control the eye movement range
  
    // Calculate the eye movement within the specific range
    const leftEyeMoveX = (leftEyeDeltaX / window.innerWidth) * (maxEyeMove * 2);
    const leftEyeMoveY = (leftEyeDeltaY / window.innerHeight) * maxEyeMove;
    const rightEyeMoveX = (rightEyeDeltaX / window.innerWidth) * (maxEyeMove * 2);
    const rightEyeMoveY = (rightEyeDeltaY / window.innerHeight) * maxEyeMove;
  
    // Update the CSS style of the eye elements to apply the movement
    leftEye.style.transform = `translate(${leftEyeMoveX}px, ${leftEyeMoveY}px)`;
    rightEye.style.transform = `translate(${rightEyeMoveX}px, ${rightEyeMoveY}px)`;
  };
  


  return (
    <section id="connect" className={scrolled ? 'scrolled' : ''}>
      <div id="contact">
      <div className="contact-container">
      <div className="temp-notice">
          <h1>More coming soon!</h1>
        </div>
      <div className="cat-face-container">
      <div><img className="cat-face" src={catFace} alt=""/></div>
      <div className="cat-eyes">
        <div><img className="cat-leftEye" src={leftEye} alt=""/></div>
        <div><img className="cat-rightEye" src={rightEye} alt=""/></div>
      </div>
      </div>
      
      
      
        

        <div className="contact-card">
        <h1>
          <span><img className="contact-icon" src={mailIcon} alt="" /></span>
          <span>Contact Me<span className="ow" >ow</span></span>
        </h1>
          
          <form className="contact-form" onSubmit={handleSubmit} action="">
            <label htmlFor="name">Your Name (Required)</label>
            <input type="text" name="name" id="name" required value={formDetails.name} onChange={(e) => onFormUpdate('name', e.target.value)} />
            {/* <label htmlFor="firstName">First Name:</label>
            <input type="text" value={formDetails.firstName} name="firstName" id="firstName" required onChange={(e) => onFormUpdate('firstName', e.target.value)} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" value={formDetails.lastName} name="lastName" id="lastName" required onChange={(e) => onFormUpdate('lastName', e.target.value)} /> */}
            <label htmlFor="emailFrom">Your Email (Required)</label>
            <input type="email" name="email_from" id="emailFrom" required value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} />
            <label htmlFor="message">Your Message (Required)</label>
            <textarea name="message" id="message" cols="30" rows="10" required value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} />
            <button className="contact-submit-button" type="submit"><span>{buttonText}</span></button>
            {
              status.message &&
              <div className="contact-status-message">
                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
              </div>
            }
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}