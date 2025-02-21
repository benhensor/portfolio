import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import TechCategory from './TechCategory'
import { Section, Container, BGWord } from '../../styles/GlobalStyles'
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
	const scrollDirection = useScrollDirection()
	const contentRef = useRef(null)
	const techRef = useRef(null)
	const isInView = useInView(techRef, { amount: 0.5 })
	const controls = useAnimation()

	const getBaseOffset = () => {
		const isSmallScreen = window.innerWidth <= 768
		return isSmallScreen ? 100 : 50
	}

	const getYOffset = useCallback(() => {
		const baseOffset = getBaseOffset()
		return scrollDirection === 'down' ? baseOffset : -baseOffset
	}, [scrollDirection])

	const [variants, setVariants] = useState({
		page: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: { duration: 0.75 },
			},
		},
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					when: 'beforeChildren',
					staggerChildren: 0.1,
					staggerDirection: scrollDirection === 'down' ? 1 : -1,
					ease: 'easeOut',
					duration: 0.5,
				},
			},
		},
		item: {
			hidden: {
				opacity: 0,
				y: getYOffset(),
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					ease: 'easeOut',
					duration: 0.3,
				},
			},
		},
	})

	useEffect(() => {
		const updateVariants = () => {
			const yOffset = getYOffset()

			setVariants((prev) => ({
				...prev,
				container: {
					...prev.container,
					visible: {
						...prev.container.visible,
						transition: {
							...prev.container.visible.transition,
							staggerDirection:
								scrollDirection === 'down' ? 1 : -1,
						},
					},
				},
				item: {
					hidden: {
						opacity: 0,
						y: yOffset,
					},
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							ease: 'easeOut',
							duration: 0.3,
						},
					},
				},
			}))
		}

		updateVariants()
		window.addEventListener('resize', updateVariants)
		return () => window.removeEventListener('resize', updateVariants)
	}, [scrollDirection, getYOffset])

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	const sections = [
		{ key: 1, title: 'Languages', skillSet: languages },
		{ key: 2, title: 'Front end', skillSet: frontend },
		{ key: 3, title: 'Back end', skillSet: backend },
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
				section="tech"
				transform="rotateY(180deg)"
				width="calc(205% + 3px)"
			/>
		</Section>
	)
}
