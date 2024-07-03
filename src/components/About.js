import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { aboutInfo } from '../data'
import profile from '../assets/img/profile.webp'
import CV from '../assets/docs/BenHensor_CV_Mar_2024.pdf'
import { 
	AboutContainer,
	AboutContent,
	TextContainer,
	ImageContainer,
	Image,
	BGWord,
 } from '../styles/AboutStyles'
 import Wave from './Wave'

export default function About() {
	const contentRef = useRef(null)
	const isInView = useInView(contentRef, { amount: 0.5 })
	const controls = useAnimation()

	const { heading, subHeading, sentences } = aboutInfo


	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	const scrollToContact = () => {
		document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
	}

	const downloadPDF = () => {
		const link = document.createElement('a')
		link.href = CV
		link.download = 'BenHensorCV.pdf'
		link.click()
	}

	const pageVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.75, ease: 'easeOut',
			},
		},
	}
 
	const contentVariants = {
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
	}

	const imageVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.75,
			},
		},
	}

	const sentenceVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: "easeOut",
				duration: 0.5,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: "easeOut",
				duration: 0.5,
			},
		},
	}

	return (
		<AboutContainer id='about'>
			<AboutContent
				ref={contentRef}
				initial="hidden"
				animate={controls}
				variants={pageVariants}
			>

				<BGWord>
					ABOUT
				</BGWord>

				<TextContainer
					initial="hidden"
					animate={controls}
					variants={contentVariants}
				>

					<motion.h1 variants={itemVariants}>
						{heading}
					</motion.h1>

					<motion.h2 variants={itemVariants}>
						{subHeading}
					</motion.h2>

					<motion.div >
						{sentences.map((sentence) => (
							<motion.p
								key={sentence.key}
								variants={sentenceVariants}
							>
								{sentence.text}
							</motion.p>
						))}

						<motion.button
							type="button"
							aria-label='Contact me'
							onClick={scrollToContact}
							variants={itemVariants}
						>
							Contact me
						</motion.button>

						<motion.button
							type="button"
							aria-label='Download CV as PDF'
							onClick={downloadPDF}
							variants={itemVariants}
						>
							CV
						</motion.button>

					</motion.div>
					
				</TextContainer>

				<ImageContainer variants={imageVariants}>
					<Image src={profile} alt="" />
				</ImageContainer>

			</AboutContent>
      <Wave 
        transform="none"
        width="calc(125% + 3px)"
        height="120px"
      />
		</AboutContainer>
	)
}