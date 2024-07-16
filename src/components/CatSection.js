import React, { useRef, useEffect } from 'react'
import { useInView, motion, useAnimation } from 'framer-motion'
import { contactStatement } from '../data'
import Cat from './cat/Cat'
import Wave from './Wave'
import AnimatedText from './AnimatedText'
import { Section, Container } from '../styles/GlobalStyles'
import {
	ContactStatement,
} from '../styles/ContactStyles'

export default function CatSection() {
	const catSectionRef = useRef(null)
	const isInView = useInView(catSectionRef, { amount: 0.2 })
	const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	const statementVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: 'easeOut',
				duration: 0.5,
			},
		},
	}


	return (
		<Section id="cat">
			<Container ref={catSectionRef}>
				<ContactStatement>
					{contactStatement.map((sentence, i) => (
						<motion.p
							key={i}
							initial="hidden"
							animate={controls}
							variants={statementVariants}
							transition={{ duration: 0.5, delay: i * 0.5 }}
						>
							<AnimatedText
								text={sentence}
								el="span"
								style={{
									fontSize: 'clamp(1.6rem, 2vw, 2rem)',
									textAlign: 'left',
									marginBottom: '3rem',
									maxWidth: '60rem',
								}}
							/>
						</motion.p>
					))}
				</ContactStatement>
				<Cat />
			</Container>
			<Wave
				section="cat"
				transform="rotateY(180deg)"
				width="calc(225% + 3px)"
				height="100px"
			/>
		</Section>
	)
}
