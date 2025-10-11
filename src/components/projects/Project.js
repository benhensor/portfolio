import React from 'react'
import { FaGithub, FaLock } from 'react-icons/fa'
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

	const isPrivateRepo = project.isPrivate;

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
					{isPrivateRepo ? <span>Private repository. Contact me for code access.</span> : ''}
					<Icons>
						{isPrivateRepo ? (
							<div className="private-repo-message">
								<FaLock
									className="project-icon-lock"
									style={{ fontSize: '2.2rem', marginRight: '0.5rem' }}
								/>
							</div>
						) : (
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
						)}
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
