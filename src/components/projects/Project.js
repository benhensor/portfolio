import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {
	ProjectCard,
	ProjectContent,
	Title,
	ProjectDetails,
	Description,
	Stack,
	Icons,
} from '../../styles/ProjectsStyles'

export default function Project({ project }) {
	return (
		<ProjectCard key={project.key} $image={project.image}>
			<ProjectContent>
				<ProjectDetails>
					<Title>{project.title}</Title>
					<Description>{project.description}</Description>
					<Stack>
						{project.techStack.map((tech, index) => (
							<div key={index}>
								<img src={tech.icon} alt={tech.name} />
								<span>{tech.name}</span>
							</div>
						))}
					</Stack>
					<Icons>
						<a href={project.code} target="_blank" rel="noreferrer">
							<FaGithub
								className="project-icon-github"
								style={{ fontSize: '2.6rem' }}
							/>
						</a>
						<a href={project.live} target="_blank" rel="noreferrer">
							Live site
						</a>
					</Icons>
				</ProjectDetails>
			</ProjectContent>
		</ProjectCard>
	)
}
