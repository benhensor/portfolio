import React, { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import Cat from './cat/Cat'
import catFace from '../assets/img/catFaceBanner.webp'
import leftEye from '../assets/img/leftEye.webp'
import rightEye from '../assets/img/rightEye.webp'
import mailIcon from '../assets/icons/mailPlane.svg'
import '../styles/contact.css'

export default function Contact() {
	const [formDetails, setFormDetails] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})
	const [buttonText, setButtonText] = useState('SEND')
	const [status, setStatus] = useState({})


	const handleFormUpdate = (e) => {
		const { name, value } = e.target
		setFormDetails({
			...formDetails,
			[name]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setButtonText('Sending...')
			const response = await fetch('http://localhost:5000/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify(formDetails),
			})
			const result = await response.json()
			setFormDetails({
				name: '',
				email: '',
				phone: '',
				message: '',
			})
			setStatus(result)
		} catch (error) {
			console.error('Error:', error)
			setStatus({ success: false, message: 'Something went wrong!' })
		} finally {
			setButtonText('SEND')
		}
	}

	return (
		<section id="connect">
			<div id="contact">
				<div className="contact-container">
					<div className="contact-message">
						<p>
							My goal is to work with great people and do great
							things!
						</p>
						<p>
							I am passionate about Software Development and tech
							in general. I'm currently looking for Junior
							Developer roles within the industry, with a focus on
							Front End Development.
						</p>
						<p>
							If you have any questions or anything at all then
							please send me a message and 'll get back to you as
							soon as possible. Thanks for stopping by!
						</p>
					</div>
					<Cat />

					<div className="contact-card">
						<h1>
							<span>
								<img
									className="contact-icon"
									src={mailIcon}
									alt=""
								/>
							</span>
							<span>
								Contact Me<span className="ow">ow</span>
							</span>
						</h1>

						<form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-label="Contact Form"
            >
              <div className="form-group">
                <label htmlFor="name">
                  Your Name <span aria-hidden="true">(Required)</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formDetails.name}
                  onChange={handleFormUpdate}
                  aria-required="true"
                  aria-invalid={formDetails.name === ''}
                />
              </div>

              <div className="form-group">
                <label htmlFor="emailFrom">
                  Your Email <span aria-hidden="true">(Required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="emailFrom"
                  required
                  value={formDetails.email}
                  onChange={handleFormUpdate}
                  aria-required="true"
                  aria-invalid={formDetails.email === ''}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formDetails.phone}
                  onChange={handleFormUpdate}
                  aria-describedby="phoneHint"
                />
                <span id="phoneHint" className="form-hint">Optional. Format: 123-456-7890</span>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Your Message <span aria-hidden="true">(Required)</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  value={formDetails.message}
                  onChange={handleFormUpdate}
                  aria-required="true"
                  aria-invalid={formDetails.message === ''}
                />
              </div>

              <button
                className="contact-submit-button"
                type="submit"
                aria-disabled={!formDetails.name || !formDetails.email || !formDetails.message}
              >
                <span>{buttonText}</span>
              </button>

              {status.message && (
                <div 
                  className="contact-status-message" 
                  role="alert" 
                  aria-live="polite"
                >
                  <p className={status.success === false ? 'danger' : 'success'}>
                    {status.message}
                  </p>
                </div>
              )}
            </form>
					</div>
				</div>
			</div>
		</section>
	)
}

// Utility function for throttling
function throttle(func, limit) {
	let inThrottle
	return function () {
		const args = arguments
		const context = this
		if (!inThrottle) {
			func.apply(context, args)
			inThrottle = true
			setTimeout(() => (inThrottle = false), limit)
		}
	}
}
