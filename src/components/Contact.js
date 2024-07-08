import React, { useState } from 'react'
import {
	ContactSection,
	ContactContainer,
	ContactMessage,
	ContactCard,
	ContactHeader,
	ContactForm,
	FormGroup,
	StatusMessage,
} from '../styles/ContactStyles'
import Cat from './cat/Cat'
import mailIcon from '../assets/icons/mailPlane.svg'
import Wave from './Wave'

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
		<ContactSection id='contact'>
			<ContactContainer>
				<ContactMessage>
					<p>
						My goal is to work with great people and do great
						things!
					</p>
					<p>
						I am passionate about Software Development and tech in
						general. I'm currently looking for Junior Developer
						roles within the industry, with a focus on Front End
						Development.
					</p>
					<p>
						If you have any questions or anything at all then please
						send me a message and 'll get back to you as soon as
						possible. Thanks for stopping by!
					</p>
				</ContactMessage>
				<Cat />

				<ContactCard>
					<ContactHeader>
						<span>
							<img
								className='contact-icon'
								src={mailIcon}
								alt=''
							/>
						</span>
						<span>
							Contact Me<span className='ow'>ow</span>
						</span>
					</ContactHeader>

					<ContactForm
						onSubmit={handleSubmit}
						aria-label='Contact Form'
					>
						<FormGroup>
							<label htmlFor='name'>
								Your Name{' '}
								<span aria-hidden='true'>(Required)</span>
							</label>
							<input
								type='text'
								name='name'
								id='name'
								required
								value={formDetails.name}
								onChange={handleFormUpdate}
								aria-required='true'
								aria-invalid={formDetails.name === ''}
							/>
						</FormGroup>

						<FormGroup>
							<label htmlFor='emailFrom'>
								Your Email{' '}
								<span aria-hidden='true'>(Required)</span>
							</label>
							<input
								type='email'
								name='email'
								id='emailFrom'
								required
								value={formDetails.email}
								onChange={handleFormUpdate}
								aria-required='true'
								aria-invalid={formDetails.email === ''}
							/>
						</FormGroup>

						<FormGroup>
							<label htmlFor='phone'>Phone Number</label>
							<input
								type='tel'
								name='phone'
								id='phone'
								value={formDetails.phone}
								onChange={handleFormUpdate}
								aria-describedby='phoneHint'
							/>
						</FormGroup>

						<FormGroup>
							<label htmlFor='message'>
								Your Message{' '}
								<span aria-hidden='true'>(Required)</span>
							</label>
							<textarea
								name='message'
								id='message'
								cols='30'
								rows='10'
								required
								value={formDetails.message}
								onChange={handleFormUpdate}
								aria-required='true'
								aria-invalid={formDetails.message === ''}
							/>
						</FormGroup>

						<button
							type='submit'
							aria-disabled={
								!formDetails.name ||
								!formDetails.email ||
								!formDetails.message
							}
						>
							<span>{buttonText}</span>
						</button>

						{status.message && (
							<StatusMessage role='alert' aria-live='polite'>
								<p
									className={
										status.success === false
											? 'danger'
											: 'success'
									}
								>
									{status.message}
								</p>
							</StatusMessage>
						)}
					</ContactForm>
				</ContactCard>
			</ContactContainer>
			<Wave transform='none' width='calc(175% + 3px)' height='100px' />
		</ContactSection>
	)
}
