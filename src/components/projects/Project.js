import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { techIcons, projectImages } from '../../data'
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

	const getProjectImage = (key) => {
		const image = projectImages.find((img) => img.key === key)
		return image;
	}

	const getTechStack = (name) => {
		const tech = techIcons.find((t) => t.name === name)
		return tech.icon;
	}

	return (
		<ProjectCard key={project.key} $image={getProjectImage(project.key).image}>
			<ProjectContent>
				<ProjectDetails>
					<Title>{project.title}</Title>
					<Description>{project.description}</Description>
					<Stack>
						{project?.techStack?.map((tech, index) => (
							<div key={index}>
								<img src={getTechStack(tech)} alt={tech} />
								<span>{tech}</span>
							</div>
						))}
					</Stack>
					<Icons>
						<a 
							href={project.code} 
							target="_blank" rel="noreferrer"
							aria-label={`View ${project.title} source code on GitHub`}
						>
							<FaGithub
								className="project-icon-github"
								style={{ fontSize: '2.6rem' }}
							/>
						</a>
						<a 
							href={project.live} 
							target="_blank" rel="noreferrer"
							aria-label={`View ${project.title} live site`}
						>
							Live site
						</a>
					</Icons>
				</ProjectDetails>
			</ProjectContent>
		</ProjectCard>
	)
}
