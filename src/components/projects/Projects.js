import React, { useRef, useEffect } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import Project from './Project'
import {
	ProjectsSection,
	BGWord,
	ProjectsContainer,
	ProjectGrid,
	Wrapper,
} from '../../styles/ProjectsStyles'
import { projects } from '../../data'
import Wave from '../Wave'

export default function Projects() {
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
		}
	}

	return (
		<ProjectsSection ref={projectsRef} id="projects">

			<BGWord>
				PROJECTS
			</BGWord>

			<ProjectsContainer>
				<h1>Projects</h1>
				<h2>Feel free to check out some of my projects below</h2>

				<ProjectGrid>
					{projects.map((project, i) => (
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

				<div className="temp-notice">
					<h2>More coming soon!</h2>
				</div>
			</ProjectsContainer>

			<Wave transform="none" width="calc(150% + 3px)" height="100px" />
		</ProjectsSection>
	)
}
