import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Stack } from 'react-bootstrap-icons'
import {
	ProjectCard,
	ProjectContent,
	Title,
	Description,
	Icons,
} from '../../styles/ProjectsStyles'

export default function Project({ project }) {
	return (
		<ProjectCard key={project.key} $image={project.image}>
			<ProjectContent>
				<Title>{project.title}</Title>
				<Description>{project.description}</Description>
				<Stack>
					{project.techStack.map((tech, index) => (
						<div key={index}>
							<span>{tech.name}</span>
							<img src={tech.icon} alt={tech.name} />
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
			</ProjectContent>
		</ProjectCard>
	)
}
