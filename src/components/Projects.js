import React from 'react'
import { projects } from '../data'
import { FaGithub } from 'react-icons/fa'
import { ProjectsWave } from './Waves'
import '../styles/projects.css'

export default function Projects() {
	return (
		<section id='projects'>
			<div className='projects-container'>
				<div className='projects-header'>
					<h1>Projects</h1>
				</div>
				<div className='projects-subheader'>
					<h2>Feel free to check out some of my projects below</h2>
				</div>

				<div className="projects-display">
					<div className='projects-grid'>
						{projects.map((project) => (
							<div className='project-card' key={project.key}>
								<div className="project-image">
									<img src={project.image} alt={project.title} />
								</div>
									<div className='project-content'>
										<div className='project-title'>
											<h2>{project.title}</h2>
										</div>
										<div className='project-info'>
											<p>{project.description}</p>
										</div>
										<div className='project-icons'>
											<a href={project.code} target='_blank' rel='noreferrer'>
												<FaGithub className='project-icon-github' />
											</a>
											<a href={project.live} target='_blank' rel='noreferrer'>
												Live site
											</a>
										</div>
										
									</div>
								
							</div>
						))}
					</div>
				</div>

				<div className='temp-notice'>
					<h1>More coming soon!</h1>
				</div>
			</div>
			<ProjectsWave />
		</section>
	);
}