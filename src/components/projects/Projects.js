import React, { useRef, useEffect } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import { usePortfolioContext } from '../../context/portfolioDataContext'
import { Section, Container, BGWord } from '../../styles/GlobalStyles'
import {
	Heading,
	SubHeading,
	ProjectGrid,
	Wrapper,
} from '../../styles/ProjectsStyles'
import Project from './Project'
import Wave from '../Wave'

export default function Projects() {
	const { projects } = usePortfolioContext()
	const projectsRef = useRef(null)
	const isInView = useInView(projectsRef, { amount: 0.1 })
	const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [isInView, controls])

	const projectVariants = {
		hidden: { opacity: 0, translateY: 150 },
		visible: {
			opacity: 1,
			translateY: 0,
		},
	}

	return (
		<Section ref={projectsRef} id="projects">
			<BGWord>PROJECTS</BGWord>
			<Container>
				<Heading>Projects</Heading>
				<SubHeading>
					Feel free to check out some of my projects below
				</SubHeading>

				<ProjectGrid>
					{projects?.map((project, i) => (
						<Wrapper
							key={project.key}
							initial="hidden"
							animate={controls}
							variants={projectVariants}
							transition={{ duration: 0.5, delay: i * 0.05 }}
							exit={{ opacity: 0, translateY: -150 }}
						>
							<Project project={project} />
						</Wrapper>
					))}
				</ProjectGrid>

				<SubHeading>More coming soon!</SubHeading>
			</Container>

			<Wave
				section="projects"
				transform="none"
				width="calc(150% + 3px)"
			/>
		</Section>
	)
}
