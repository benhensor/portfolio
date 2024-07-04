import React, { useRef } from 'react'
import styled from 'styled-components'
// import { useInView } from 'framer-motion'
import Project from './Project'
import { projects } from '../../data'
import Wave from '../Wave'
import '../../styles/projects.css'

export default function Projects() {
	const projectsRef = useRef(null)
	// const isInView = useInView(projectsRef, { amount: 0.5 })

	return (
		<ProjectsSection ref={projectsRef} id="projects">

			<ProjectsContainer>
				<div className="projects-header">
					<h1>Projects</h1>
				</div>

				<div className="projects-subheader">
					<h2>Feel free to check out some of my projects below</h2>
				</div>

				<ProjectGrid>
					{projects.map((project) => (
						<Wrapper key={project.key} >
							<Project project={project}/>
						</Wrapper>
					))}
				</ProjectGrid>

				<div className="temp-notice">
					<h1>More coming soon!</h1>
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

const ProjectsSection = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ProjectsContainer = styled.div`
	max-width: 1000px;
  width: 100%;
	padding: 5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	@media only screen and (max-width: 999px) {
		padding: 5rem 3rem;
	}
	@media only screen and (max-width: 768px) {
		padding: 5rem 2.5rem;
	}
	@media only screen and (max-width: 480px) {
		padding: 5rem 2rem;
	}
`

const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Wrapper = styled.div`
  width: 100%;
`