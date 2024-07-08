import React, { useRef } from 'react'
// import { useInView } from 'framer-motion'
import Project from './Project'
import {
	ProjectsSection,
	ProjectsContainer,
	ProjectGrid,
	Wrapper,
} from '../../styles/ProjectsStyles'
import { projects } from '../../data'
import Wave from '../Wave'

export default function Projects() {
	const projectsRef = useRef(null)
	// const isInView = useInView(projectsRef, { amount: 0.5 })

	return (
		<ProjectsSection ref={projectsRef} id="projects">

			<ProjectsContainer>
				<h1>Projects</h1>
				<h2>Feel free to check out some of my projects below</h2>

				<ProjectGrid>
					{projects.map((project) => (
						<Wrapper key={project.key} >
							<Project project={project}/>
						</Wrapper>
					))}
				</ProjectGrid>

				<div className="temp-notice">
					<h2>More coming soon!</h2>
				</div>
			</ProjectsContainer>

			<Wave 
				transform="none"
				width="calc(150% + 3px)"
				height="100px"
			/>
		</ProjectsSection>
	)
}