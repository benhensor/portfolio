import React from 'react'
import Wave from './Wave'
import { useWindowSize } from '../hooks/useWindowSize'
import { Section, Container, BGWord } from '../styles/GlobalStyles'
import { journey } from '../data'
import RightArrow from './icons/RightArrow'
import Education from './icons/Education'
import Work from './icons/Work'
import {
	Timeline,
	Event,
	Button,
} from '../styles/JourneyStyles'

export default function Journey() {
	const windowWidth = useWindowSize()[0] // Since it returns [width]
	const mobileView = windowWidth < 450

	const downloadPDF = () => {
		const link = document.createElement('a')
		link.href = '/api/serve-cv.php'
		link.click()
	}

	const insertBreak = (str) => {
    if (!str) return [str]
    
    if (mobileView) {
      if (str.includes(' - ')) {
        const breakIndex = str.indexOf(' - ')
        return [str.slice(0, breakIndex), str.slice(breakIndex + 3)]
      }
      if (str.includes(' & ')) {
        const breakIndex = str.indexOf(' & ')
        return [str.slice(0, breakIndex), str.slice(breakIndex)]
      }
    }
    return [str]
  }

	const eventTitle = (title) => {
		const titleParts = insertBreak(title)
		return (
			<>
				{titleParts[0]}
				{titleParts.length > 1 && <br />}
				{titleParts[1]}
			</>
		)
	}

	return (
		<Section id="journey">
			<BGWord>JOURNEY</BGWord>
			<Container id="journey-container">
				<Timeline>
					<div className="vertical-line"></div>
					{journey.events.map((event) => (
						<Event
							key={event.key}
							className={`${
								event.key % 2 === 0 ? 'left' : 'right'
							}`}
							$eventKey={event.key}
						>
							<div className="row">
								<div className="event-date">
									<span>{event.date}</span>
								</div>
								<div className="spacer-opposite"></div>
							</div>
							<div className="row">
								<div className="event-point-line-icon">
									<div className="spacer-event-line"></div>
									<div className="event-arrow">
										<RightArrow />
									</div>
									<div className="event-dotted-line">
										<div className="event-icon-container">
											<div className="event-icon">
												{event.type === 'education' ? (
													<Education />
												) : (
													<Work />
												)}
											</div>
										</div>
										<div className="event-icon-arrow">
											<RightArrow />
										</div>
									</div>
								</div>
								<div className="event-point"></div>
								<div className="spacer-opposite"></div>
							</div>
							<div className="row">
								<div className="event-content-container">
									<div className="event-content">
										<p className="event-title">
											{eventTitle(event.title)}
										</p>
										<p className="event-provider">
											{event.provider}
										</p>
										<p className="event-description">
											{event.description}
										</p>
									</div>
								</div>
								<div className="spacer-opposite"></div>
							</div>
						</Event>
					))}
					<div className="row">
						<Button
							type="button"
							aria-label="Download CV as PDF"
							onClick={downloadPDF}
						>
							Download CV
						</Button>
					</div>
				</Timeline>
			</Container>
			<Wave
				section={'journey'}
				transform="none"
				width="calc(180% + 3px)"
			/>
		</Section>
	)
}