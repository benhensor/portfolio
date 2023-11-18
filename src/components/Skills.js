import React from 'react'
import { tech } from '../data'
import { SkillsWave } from './Waves'
import '../styles/skills.css'

export default function Skills() {
	return (
		<section id='skills'>
			<div className="skills">
				<div className='skills-container'>
					<div className='skills-header'>
						<h1>Skills</h1>
						<h3>Here are just some of the technologies I have worked with...</h3>
					</div>
					<div className='skills-row'>
						<div>
							<div className='skills-slider-top-glow'></div>
							<div className='skills-content'>
								<div className='skills-slider'>
									{tech.map((skill, index) => (
										<div className='skill-card' key={index}>
											<img src={skill.icon} alt={skill.name} />
											<div className='skill-name'>
												<h3>{skill.name}</h3>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<SkillsWave />
			</div>
		</section>
	);
}
