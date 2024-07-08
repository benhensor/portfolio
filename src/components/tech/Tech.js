import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView, useAnimation } from 'framer-motion'
import TechCategory from './TechCategory'
import {
	backend,
	design,
	devops,
	frontend,
	languages,
	testing,
	tools,
} from '../../data'
import Wave from '../Wave'

export default function Skills() {

	const contentRef = useRef(null)
	const techRef = useRef(null)
	const isInView = useInView(techRef, { amount: 0.5 })
	const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	const sections = [
		{ key: 1, title: 'Languages', skillSet: languages },
		{ key: 2, title: 'Frontend', skillSet: frontend },
		{ key: 3, title: 'Backend', skillSet: backend },
		{ key: 4, title: 'Testing', skillSet: testing },
		{ key: 5, title: 'DevOps', skillSet: devops },
		{ key: 6, title: 'Design', skillSet: design },
		{ key: 7, title: 'Tools', skillSet: tools },
	]

	const pageVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.75,
			},
		},
	}

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
				ease: 'easeOut',
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
				ease: 'easeOut',
				duration: 0.5,
			},
		},
	}

	return (
		<TechStack ref={contentRef} id="tech">
			<Content
				ref={techRef}
				initial="hidden"
				animate={controls}
				variants={pageVariants}
			>
				<BGWord>TECH STACK</BGWord>

				<TechCategoriesContainer
					initial="hidden"
					animate={controls}
					variants={containerVariants}
				>
					{sections.map((section) => (
						<TechCategory
							key={section.key}
							title={section.title}
							skillSet={section.skillSet}
							initial="hidden"
							variants={itemVariants}
						/>
					))}
				</TechCategoriesContainer>
			</Content>
			<Wave 
				transform="rotateY(180deg)"
				width="calc(205% + 3px)"
				height="80px"
			/>
		</TechStack>
	)
}

const TechStack = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: var(--background-color);
	@media screen and (max-width: 1439px) {
		padding: 0 3rem;
	}
	@media screen and (max-width: 768px) {
		padding: 0 2rem;
	}
`

const Content = styled(motion.div)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 100rem;
	height: 50rem;
	margin: 10rem 0 30rem 0;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin: 7rem 0 20rem 0;
	}
`

const TechCategoriesContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	z-index: 1;
`

const BGWord = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	text-align: center;
	font-size: clamp(3rem, 15vw, 15rem);
	font-weight: 700;
	color: #323232;
	z-index: 0;
	@media screen and (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`