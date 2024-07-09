import React, { useRef, useEffect, useState } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import TechCategory from './TechCategory'
import {
	Section,
	Container,
	BGWord,
} from '../../styles/GlobalStyles'
import { TechContainer, TechCategoriesContainer } from '../../styles/TechStyles'
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

export default function Tech() {

	const contentRef = useRef(null)
	const techRef = useRef(null)
	const isInView = useInView(techRef, { amount: 0.5 })
	const controls = useAnimation()
	const [variants, setVariants] = useState({
		page: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					duration: 0.75,
				},
			},
		},
		container: {
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
						},
					},
				},
				container: {
					hidden: { opacity: 0, y: 50 },
					visible: {
						opacity: 1,
						y: isSmallScreen ? -50 : 0,
						transition: {
							when: 'beforeChildren',
							staggerChildren: 0.1,
							ease: 'easeOut',
							duration: 0.5,
						},
					},
				},
				item: {
					hidden: { opacity: 0, y: isSmallScreen ? 100 : 50 },
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

	const sections = [
		{ key: 1, title: 'Languages', skillSet: languages },
		{ key: 2, title: 'Frontend', skillSet: frontend },
		{ key: 3, title: 'Backend', skillSet: backend },
		{ key: 4, title: 'Testing', skillSet: testing },
		{ key: 5, title: 'DevOps', skillSet: devops },
		{ key: 6, title: 'Design', skillSet: design },
		{ key: 7, title: 'Tools', skillSet: tools },
	]

	return (
		<Section ref={contentRef} id="tech">
			<BGWord>TECH STACK</BGWord>
			<Container>
				
				<TechContainer
					ref={techRef}
					initial="hidden"
					animate={controls}
					variants={variants.page}
				>
					<TechCategoriesContainer
						initial="hidden"
						animate={controls}
						variants={variants.container}
					>
						{sections.map((section) => (
							<TechCategory
								key={section.key}
								title={section.title}
								skillSet={section.skillSet}
								initial="hidden"
								variants={variants.item}
							/>
						))}
					</TechCategoriesContainer>
				</TechContainer>
			</Container>
			<Wave 
				transform="rotateY(180deg)"
				width="calc(205% + 3px)"
				height="80px"
			/>
		</Section>
	)
}