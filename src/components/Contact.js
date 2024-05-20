import React, { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import catFace from '../assets/img/catFaceBanner.png'
import leftEye from '../assets/img/leftEye.png'
import rightEye from '../assets/img/rightEye.png'
import mailIcon from '../assets/icons/mailPlane.svg'
import '../styles/contact.css'

export default function Contact () {

    const [formDetails, setFormDetails] = useState({
                                                name: '',
                                                email: '',
                                                phone: '',
                                                message: ''
                                            })
    const [buttonText, setButtonText] = useState('SEND')
    const [status, setStatus] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const catFaceContainerRef = useRef(null)
    const screenWidth = useWindowSize()


    const handleFormUpdate = (e) => {
        const { name, value } = e.target
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }


    // const onFormUpdate = (category, value) => {
    //     setFormDetails({
    //     ...formDetails,
    //     [category]: value
    //     })
    // }

    useEffect(() => {
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(
        (entries) => {
            // If the cat face container is in view, start listening to mousemove
            if (entries[0].isIntersecting) {
            setIsVisible(true)
            window.addEventListener('mousemove', handleMouseMove)
            } else {
            // If the cat face container is out of view, remove the mousemove listener
            setIsVisible(false)
            window.removeEventListener('mousemove', handleMouseMove)
            }
        },
        {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0.5, // 50% visibility threshold
        }
        )
        // Start observing the cat face container element
        observer.observe(catFaceContainerRef.current)
        // Clean up the observer on unmount
        return () => observer.disconnect()
    }, [isVisible])



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setButtonText('Sending...')
            const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(formDetails)
            })
            const result = await response.json()
            setFormDetails({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
            setStatus(result)
        } catch (error) {
            console.error('Error:', error)
            setStatus({ success: false, message: 'Something went wrong!' })
        } finally {
            setButtonText('SEND')
        }            
    }



    useEffect(() => {
        const shouldAddEvent = screenWidth >= 1024 && isVisible
        if (shouldAddEvent) {
            window.addEventListener('mousemove', handleMouseMove)
        }
        return () => {
            if (shouldAddEvent) {
                window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [screenWidth, isVisible])



    const handleMouseMove = (e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY
    
        // Get the eye elements and their bounding boxes
        const leftEye = document.querySelector('.cat-leftEye')
        const rightEye = document.querySelector('.cat-rightEye')
        const leftEyeBoundingBox = leftEye.getBoundingClientRect()
        const rightEyeBoundingBox = rightEye.getBoundingClientRect()
    
        // Calculate the center positions of the eyes
        const leftEyeCenterX = leftEyeBoundingBox.left + leftEyeBoundingBox.width / 2
        const leftEyeCenterY = leftEyeBoundingBox.top + leftEyeBoundingBox.height * 1.5
        const rightEyeCenterX = rightEyeBoundingBox.left + rightEyeBoundingBox.width / 2
        const rightEyeCenterY = rightEyeBoundingBox.top + rightEyeBoundingBox.height * 1.5
    
        // Calculate the distance between the mouse and the eye centers
        const leftEyeDeltaX = mouseX - leftEyeCenterX - 1000
        const leftEyeDeltaY = mouseY - leftEyeCenterY * 2
        const rightEyeDeltaX = mouseX - rightEyeCenterX - 200
        const rightEyeDeltaY = mouseY - rightEyeCenterY * 2
    
        const maxEyeMove = 35 // Adjust this value to control the eye movement range
    
        // Calculate the eye movement within the specific range
        const leftEyeMoveX = (leftEyeDeltaX / window.innerWidth) * (maxEyeMove )
        const leftEyeMoveY = (leftEyeDeltaY / window.innerHeight) * (maxEyeMove * 1.5)
        const rightEyeMoveX = (rightEyeDeltaX / window.innerWidth) * (maxEyeMove )
        const rightEyeMoveY = (rightEyeDeltaY / window.innerHeight) * (maxEyeMove * 1.5)
    
        // Update the CSS style of the eye elements to apply the movement
        leftEye.style.transform = `translate(${leftEyeMoveX}px, ${leftEyeMoveY}px)`
        rightEye.style.transform = `translate(${rightEyeMoveX}px, ${rightEyeMoveY}px)`
    }
    


    return (
        <section id="connect">
            <div id="contact">
                <div className="contact-container">

                <div className="contact-message">
                            <p>My goal is to work with great people and do great things!</p>
                            <p>I am passionate about Software Development and tech in general. I'm currently looking for Junior Developer roles within the industry, with a focus on Front End Development.</p>
                            <p>If you have any questions or anything at all then please send me a message and 'll get back to you as soon as possible. Thanks for stopping by!</p>
                        </div>
                    <div className="cat-face-container" ref={catFaceContainerRef}>
                        <div><img className="cat-face" src={catFace} alt=""/></div>
                            <div className="cat-eyes">
                                <div><img className="cat-leftEye" src={leftEye} alt=""/></div>
                                <div><img className="cat-rightEye" src={rightEye} alt=""/></div>
                            </div>
                        </div>
                    
                    
                    
                        

                        <div className="contact-card">

                        <h1>
                        <span><img className="contact-icon" src={mailIcon} alt="" /></span>
                        <span>Contact Me<span className="ow">ow</span></span>
                        </h1>
                        
                        <form className="contact-form" onSubmit={handleSubmit} action="">
                            <label htmlFor="name">Your Name (Required)</label>
                            <input type="text" name="name" id="name" required value={formDetails.name} onChange={handleFormUpdate} />
                            <label htmlFor="emailFrom">Your Email (Required)</label>
                            <input type="email" name="email" id="emailFrom" required value={formDetails.email} onChange={handleFormUpdate} />
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" name="phone" value={formDetails.phone} onChange={handleFormUpdate} />
                            <label htmlFor="message">Your Message (Required)</label>
                            <textarea name="message" id="message" cols="30" rows="10" required value={formDetails.message} onChange={handleFormUpdate} />
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