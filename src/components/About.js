import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { aboutInfo } from '../data'
import profile from '../assets/img/profile.webp'
import { Section, Container, BGWord } from '../styles/GlobalStyles'
import {
	AboutContent,
	TextContainer,
	ImageContainer,
	Image,
} from '../styles/AboutStyles'
import Wave from './Wave'

export default function About() {
	const contentRef = useRef(null)
	const isInView = useInView(contentRef, { amount: 0.5 })
	const controls = useAnimation()
	const [variants, setVariants] = useState({
		page: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.75,
					ease: 'easeOut',
				},
			},
		},
		content: {
			hidden: { opacity: 0, y: 50 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.75,
					delay: 0.75,
					staggerChildren: 0.3,
				},
			},
			exit: {
				opacity: 0,
				y: 50,
				transition: {
					duration: 0.75,
				},
			},
		},
		image: {
			hidden: { opacity: 0, y: 50 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 1,
					delay: 0.75,
				},
			},
		},
		sentence: {
			hidden: { opacity: 0, y: 50 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					ease: 'easeOut',
					duration: 0.5,
				},
			},
		},
		item: {
			hidden: { opacity: 0, y: 50 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					ease: 'easeOut',
					duration: 0.5,
				},
			},
		},
	})

	useEffect(() => {
		const updateVariants = () => {
			const isSmallScreen = window.innerWidth <= 768
			setVariants({
				page: {
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							duration: 0.75,
							ease: 'easeOut',
						},
					},
				},
				content: {
					hidden: { opacity: 0, y: 50 },
					visible: {
						opacity: 1,
						y: isSmallScreen ? -75 : 0,
						transition: {
							duration: 0.75,
							delay: 0.75,
							staggerChildren: 0.3,
						},
					},
					exit: {
						opacity: 0,
						y: 50,
						transition: {
							duration: 0.75,
						},
					},
				},
				image: {
					hidden: { opacity: 0, y: 50 },
					visible: {
						opacity: 1,
						y: isSmallScreen ? -75 : 0,
						transition: {
							duration: 1,
							delay: 0.75,
						},
					},
				},
				sentence: {
					hidden: { opacity: 0, y: 50 },
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							ease: 'easeOut',
							duration: 0.5,
						},
					},
				},
				item: {
					hidden: { opacity: 0, y: 50 },
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							ease: 'easeOut',
							duration: 0.5,
						},
					},
				},
			})
		}

		updateVariants()
		window.addEventListener('resize', updateVariants)
		return () => window.removeEventListener('resize', updateVariants)
	}, [])

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	const scrollToContact = () => {
		document
			.getElementById('contact')
			.scrollIntoView({ behavior: 'smooth' })
	}

	const downloadPDF = () => {
		const link = document.createElement('a')
		link.href = '/api/serve-cv.php'
		link.click()
	}

	const { heading, subHeading, sentences } = aboutInfo

	return (
		<Section id="about">
			<BGWord $left={'40%'}>ABOUT</BGWord>
			<Container>
				<AboutContent
					ref={contentRef}
					initial="hidden"
					animate={controls}
					variants={variants.page}
				>
					<TextContainer
						initial="hidden"
						animate={controls}
						variants={variants.content}
					>
						<motion.h1 variants={variants.item}>
							{heading}
						</motion.h1>
						<motion.h2 variants={variants.item}>
							{subHeading}
						</motion.h2>
						<motion.div>
							{sentences.map((sentence) => (
								<motion.p
									key={sentence.key}
									variants={variants.sentence}
								>
									{sentence.text}
								</motion.p>
							))}
							<motion.button
								type="button"
								aria-label="Contact me"
								onClick={scrollToContact}
								variants={variants.item}
							>
								Contact me
							</motion.button>
							<motion.button
								type="button"
								aria-label="Download CV as PDF"
								onClick={downloadPDF}
								variants={variants.item}
							>
								CV
							</motion.button>
						</motion.div>
					</TextContainer>
					<ImageContainer variants={variants.image}>
						<Image src={profile} alt="" />
					</ImageContainer>
				</AboutContent>
			</Container>
			<Wave
				section="about"
				transform="none"
				width="calc(150% + 3px)"
			/>
		</Section>
	)
}
