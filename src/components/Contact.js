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

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value) return 'Required'
                if (value.length > 15) return 'Must be 15 characters or less'
                return undefined
            case 'email':
                if (!value) return 'Required'
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                    return 'Invalid email address'
                }
                return undefined
            default:
                return undefined
        }
    }

    const updateForm = (e) => {
        const { name, value } = e.target
        const newFormDetails = {
            ...formDetails,
            [name]: value,
        }
        setFormDetails(newFormDetails)
        
        // Only set the error if there is one
        const fieldError = validateField(name, value)
        setFormErrors(prev => ({
            ...prev,
            [name]: fieldError // If undefined, it will remove the error
        }))
    }

    // For form submission validation
    const validate = (values) => {
        const errors = {}

        if (!values.name) {
            errors.name = 'Required'
        } else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        return errors
    }

    const isValid = (field) => {
        const value = formDetails[field]
        return value && !validateField(field, value)
    }

    const phpMailer = 'https://benhensor.co.uk/api/send-mail.php'

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
            const response = await fetch(phpMailer, {
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
                            autoComplete="name"
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
                            autoComplete="email"
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
											{formErrors.email && (
													<ErrorMessage
															id="email-error"
															role="alert"
															aria-live="assertive"
													>
															{formErrors.email}
													</ErrorMessage>
											)}
                    </InputWrapper>

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
											{formErrors.message && (
													<ErrorMessage
															id="message-error"
															role="alert"
															aria-live="assertive"
													>
															{formErrors.message}
													</ErrorMessage>
											)}
                    </InputWrapper>

                    <ContactButton type="submit" aria-label="Send">
                        {buttonText}
                    </ContactButton>
                </ContactForm>
                {status.message && (
                    setTimeout(() => {
                        setButtonText('SENT')
                        setTimeout(() => {
                            setButtonText('SEND')
                        }, 1200);
                    }, 1200)
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