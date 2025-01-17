import React, { useRef, useState, useEffect } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import MailIcon from '../assets/icons/mailPlane.svg'
import { FcCheckmark, FcCancel } from 'react-icons/fc'
import Wave from './Wave'
import { Section, Container } from '../styles/GlobalStyles'
import {
	ContactHeader,
	ContactIcon,
	ContactForm,
	ContactLabel,
	ContactInput,
	ContactTextarea,
	ContactButton,
	ContactStatus,
	InputWrapper,
	ValidIcon,
	InvalidIcon,
	ErrorMessage,
} from '../styles/ContactStyles'

export default function Contact() {
	const contactRef = useRef(null)
	const isInView = useInView(contactRef, { amount: 0.2 })
	const controls = useAnimation()

	const [formDetails, setFormDetails] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})
	const [buttonText, setButtonText] = useState('SEND')
	const [formErrors, setFormErrors] = useState({})
	const [status, setStatus] = useState({ success: null, message: '' })

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	const updateForm = (e) => {
		const { name, value } = e.target
		setFormDetails({
			...formDetails,
			[name]: value,
		})
	}

	const submitEmail = async (e) => {
		e.preventDefault()
		try {
			const errors = validate(formDetails)
			if (Object.keys(errors).length) {
				setFormErrors(errors)
				return
			}
			setFormErrors({})
			setButtonText('SENDING...')
			const response = await fetch('https://benhensor.co.uk/api/send-mail.php', {
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
			console.error('Submission error:', error)
			setStatus({
				success: false,
				message: 'Submission failed. Please try again.',
			})
		} finally {
			setButtonText('SEND')
		}
	}

	const validate = (values) => {
		const errors = {}

		if (!values.name) {
			errors.name = 'Required'
		} else if (values.name.length > 15) {
			errors.name = 'Must be 15 characters or less'
		}

		if (!values.email) {
			errors.email = 'Required'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}

		if (!values.phone) {
			errors.phone = 'Required'
		} else if (!/^\d{9,16}/g.test(values.phone)) {
			errors.phone = 'Invalid phone number'
		}

		return errors
	}

	const isValid = (field) => !formErrors[field] && formDetails[field]

	return (
		<Section id="contact">
			<Container ref={contactRef}>
			
				<ContactHeader>
					<ContactIcon src={MailIcon} alt="Mail Icon" />
					Contact <span className="me">&nbsp;Me</span>
					<span className="ow">ow</span>
				</ContactHeader>

				<ContactForm onSubmit={submitEmail}>
					<ContactLabel className="sr-only" htmlFor="name">
						Name
					</ContactLabel>
					<InputWrapper>
						<ContactInput
							type="text"
							id="name"
							name="name"
							value={formDetails.name}
							onChange={updateForm}
							placeholder="Name"
							aria-describedby="name-error"
							required
							$borderBottom={
								formErrors.name
									? '3px solid var(--error)'
									: '3px solid var(--dkBlue)'
							}
						/>
						{formErrors.name ? (
							<InvalidIcon aria-hidden="true">
								<FcCancel />
							</InvalidIcon>
						) : (
							isValid('name') && (
								<ValidIcon aria-hidden="true">
									<FcCheckmark />
								</ValidIcon>
							)
						)}
					</InputWrapper>
					{formErrors.name && (
						<ErrorMessage
							id="name-error"
							role="alert"
							aria-live="assertive"
						>
							{formErrors.name}
						</ErrorMessage>
					)}

					<ContactLabel className="sr-only" htmlFor="email">
						Email
					</ContactLabel>
					<InputWrapper>
						<ContactInput
							type="email"
							id="email"
							name="email"
							value={formDetails.email}
							onChange={updateForm}
							placeholder="Email"
							aria-describedby="email-error"
							required
							$borderBottom={
								formErrors.email
									? '3px solid var(--error)'
									: '3px solid var(--dkBlue)'
							}
						/>
						{formErrors.email ? (
							<InvalidIcon aria-hidden="true">
								<FcCancel />
							</InvalidIcon>
						) : (
							isValid('email') && (
								<ValidIcon aria-hidden="true">
									<FcCheckmark />
								</ValidIcon>
							)
						)}
					</InputWrapper>
					{formErrors.email && (
						<ErrorMessage
							id="email-error"
							role="alert"
							aria-live="assertive"
						>
							{formErrors.email}
						</ErrorMessage>
					)}

					<ContactLabel className="sr-only" htmlFor="phone">
						Phone
					</ContactLabel>
					<InputWrapper>
						<ContactInput
							type="tel"
							id="phone"
							name="phone"
							value={formDetails.phone}
							onChange={updateForm}
							placeholder="Phone"
							aria-describedby="phone-error"
							$borderBottom={
								formErrors.phone
									? '3px solid var(--error)'
									: '3px solid var(--dkBlue)'
							}
						/>
						{formErrors.phone ? (
							<InvalidIcon aria-hidden="true">
								<FcCancel />
							</InvalidIcon>
						) : (
							isValid('phone') && (
								<ValidIcon aria-hidden="true">
									<FcCheckmark />
								</ValidIcon>
							)
						)}
					</InputWrapper>
					{formErrors.phone && (
						<ErrorMessage
							id="phone-error"
							role="alert"
							aria-live="assertive"
						>
							{formErrors.phone}
						</ErrorMessage>
					)}

					<ContactLabel className="sr-only" htmlFor="message">
						Message
					</ContactLabel>
					<InputWrapper>
						<ContactTextarea
							id="message"
							name="message"
							value={formDetails.message}
							onChange={updateForm}
							placeholder="Message"
							aria-describedby="message-error"
							required
						/>
					</InputWrapper>
					{formErrors.message && (
						<ErrorMessage
							id="message-error"
							role="alert"
							aria-live="assertive"
						>
							{formErrors.message}
						</ErrorMessage>
					)}

					<ContactButton type="submit" aria-label="Send">
						{buttonText}
					</ContactButton>
				</ContactForm>
				{status.message && (
					<ContactStatus
						role="alert"
						aria-live="polite"
						$success={status.success}
					>
						{status.message}
					</ContactStatus>
				)}
			</Container>
			<Wave
				section="contact"
				transform="rotateY(180deg)"
				width="calc(225% + 3px)"
			/>
		</Section>
	)
}
