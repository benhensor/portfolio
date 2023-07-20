import React, { useState, useEffect } from 'react';
import catFace from '../../assets/img/catFaceBanner.png';
import leftEye from '../../assets/img/leftEye.svg';
import rightEye from '../../assets/img/rightEye.svg';
import mailIcon from '../../assets/img/mailPlane.svg';
import './contact.css';



export default function Contact () {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('SEND')
  const [status, setStatus] = useState({})
  // state to track when user is scrolling
  const [scrolled, setScrolled] = useState(false);


  // triggered when user scrolls
  useEffect(() => {
    // function to update scrolling state
    const onScroll = () => {
    // check if user has scrolled more than 50px
    if (window.scrollY > 3250) {
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
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'})
      }
  }



  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    // Get the eye elements and their bounding boxes
    const leftEye = document.querySelector('.cat-leftEye');
    const rightEye = document.querySelector('.cat-rightEye');
    const leftEyeBoundingBox = leftEye.getBoundingClientRect();
    const rightEyeBoundingBox = rightEye.getBoundingClientRect();
  
    // Calculate the center positions of the eyes
    const leftEyeCenterX = leftEyeBoundingBox.left + leftEyeBoundingBox.width / 0.5;
    const leftEyeCenterY = leftEyeBoundingBox.top + leftEyeBoundingBox.height * 6;
    const rightEyeCenterX = rightEyeBoundingBox.left + rightEyeBoundingBox.width / 2;
    const rightEyeCenterY = rightEyeBoundingBox.top + rightEyeBoundingBox.height * 6;
  
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
      <div className="cat-face-container">
      <div ><img className="cat-face" src={catFace} alt=""/></div>
      <div className="cat-eyes">
        <div><img className="cat-leftEye" src={leftEye} alt=""/></div>
        <div ><img className="cat-rightEye" src={rightEye} alt=""/></div>
      </div>
      </div>
      
      
      
        

        <div className="contact-card">
        <h1>
          <span><img className="contact-icon" src={mailIcon} alt="" /></span>
          <span>Contact Meow</span>
        </h1>
          
          <form className="contact-form" onSubmit={handleSubmit} action="">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" value={formDetails.firstName} name="firstName" id="firstName" required onChange={(e) => onFormUpdate('firstName', e.target.value)} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" value={formDetails.lastName} name="lastName" id="lastName" required onChange={(e) => onFormUpdate('lastName', e.target.value)} />
            <label htmlFor="emailFrom">Your Email:</label>
            <input type="email" name="email_from" id="emailFrom" required value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} />
            <label htmlFor="message">Message:</label>
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