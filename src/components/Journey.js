import React from 'react'
import { motion } from 'framer-motion'
import Wave from './Wave'
import { useWindowSize } from '../hooks/useWindowSize'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { Section, Container, BGWord } from '../styles/GlobalStyles'
import { usePortfolioContext } from '../context/portfolioDataContext'
import Arrow from './icons/Arrow'
import Education from './icons/Education'
import Work from './icons/Work'
import {
	Timeline,
	Event,
	Button,
	VerticalLine,
	EventContent,
} from '../styles/JourneyStyles'

export default function Journey() {
	const { journeyInfo } = usePortfolioContext()
	const scrollDirection = useScrollDirection()
	const windowWidth = useWindowSize()[0]
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

	const formatLineBreak = (title) => {
		const titleParts = insertBreak(title)
		return (
			<>
				{titleParts[0]}
				{titleParts.length > 1 && <br />}
				{titleParts[1]}
			</>
		)
	}

	const timings = {
		verticalLine: [
			{ scaleY: 0 },
			{ scaleY: 1 },
			{ duration: 0.5, ease: 'easeInOut' },
		],
		event: [
			{ opacity: 0 },
			{ opacity: 1 },
			{ duration: 0.5 },
		],
		eventPoint: [
        { scale: 0 },
        { scale: 1 },
        { duration: 0.1, ease: 'easeOut' }  // Starts at 0s
    ],
    eventArrow: [
        { scale: 0 },
        { scale: 1 },
        { delay: 0.1, duration: 0.1, ease: 'easeOut' }  // Starts at 0.1s
    ],
    eventDottedLine: [
        { scaleX: 0 },
        { scaleX: 1 },
        { delay: 0.2, duration: 0.5, ease: 'easeOut' }  // Starts at 0.2s
    ],
    eventIconContainer: [
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1 },
        { delay: 0.1, duration: 0.3, ease: 'easeOut' }  // Starts at 0.7s (after dotted line)
    ],
    eventDate: [
        { opacity: 0 },
        { opacity: 1 },
        { delay: 0.4, duration: 0.3 }  // Starts at 1.0s
    ],
    eventContent: [
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        { delay: 0.5, duration: 0.24, ease: 'easeInOut' }  // Starts at 1.3s
    ]
	}

	return (
		<Section id="journey">
			<BGWord>JOURNEY</BGWord>
			<Container id="journey-container">
				<Timeline>
					<VerticalLine
						as={motion.div}
						$scrollDirection={scrollDirection}
						initial={{ scaleY: timings.verticalLine[0].scaleY }}
						whileInView={{ scaleY: timings.verticalLine[1].scaleY }}
						transition={timings.verticalLine[2]}
					/>
					<div className="events">
						{journeyInfo?.events.map((event) => (
							<Event
								key={event.key}
								className={`${event.key % 2 === 0 ? 'left' : 'right'}`}
								$eventKey={event.key}
								as={motion.div}
								initial={{
									opacity: timings.event[0].opacity,
								}}
								whileInView={{
									opacity: timings.event[1].opacity,
								}}
								viewport={{ once: true }}
								transition={timings.event[2]}
							>
								<div className="row">
									<motion.div
										className="event-date"
										initial={{ opacity: timings.eventDate[0].opacity }}
										whileInView={{ opacity: timings.eventDate[1].opacity }}
										transition={timings.eventDate[2]}
									>
										<span>{event.date}</span>
									</motion.div>
									<div className="spacer-opposite"></div>
								</div>
								<div className="row">
									<div className="event-point-line-icon">
										<div className="spacer-event-line"></div>
										<motion.div
											className="event-arrow"
											initial={{ scale: timings.eventArrow[0].scale }}
											whileInView={{ scale: timings.eventArrow[1].scale }}
											transition={timings.eventArrow[2]}
										>
											<Arrow
												direction={
													event.key % 2 === 0
														? 'left'
														: 'right'
												}
											/>
										</motion.div>
										<motion.div
											className="event-dotted-line"
											initial={{ 
												scaleX: timings.eventDottedLine[0].scaleX,
												transformOrigin: event.key % 2 === 0 ? 'left center' : 'right center' 
											}}
											whileInView={{ 
												scaleX: timings.eventDottedLine[1].scaleX,
											}}
											transition={timings.eventDottedLine[2]}
										>
											<motion.div
												className="event-icon-container"
												initial={ timings.eventIconContainer[0] }
												whileInView={ timings.eventIconContainer[1] }
												transition={ timings.eventIconContainer[2] } 
											>
												<div className="event-icon">
													{event.type === 'education' ? (
														<Education />
													) : (
														<Work />
													)}
												</div>
												<motion.div
													className={`event-icon-arrow ${event.key % 2 === 0 ? 'left' : 'right'}`}
												>
												<Arrow
													direction={
														event.key % 2 === 0
															? 'left'
															: 'right'
													}
												/>
											</motion.div>
											</motion.div>
										</motion.div>
									</div>
									<motion.div
										className="event-point"
										initial={{ scale: timings.eventPoint[0].scale }}
										whileInView={{ scale: timings.eventPoint[1].scale }}
										transition={timings.eventPoint[2]}
									/>
									<div className="spacer-opposite"></div>
								</div>
								<div className="row">
									<EventContent
										className={`${
											event.key % 2 === 0 ? 'left' : 'right'
										}`}
										as={motion.div}
										initial={ timings.eventContent[0] }
										whileInView={ timings.eventContent[1] }
										transition={ timings.eventContent[2] }
									>
										<div className="event-content">
											<p className="event-title">
												{formatLineBreak(event.title)}
											</p>
											<p className="event-provider">
												{formatLineBreak(event.provider)}
											</p>
											<p className="event-description">
												{event.description}
											</p>
										</div>
									</EventContent>
									<div className="spacer-opposite"></div>
								</div>
							</Event>
						))}
						<div className="row-cv-btn">
							<div className="col-left">
								<Button
									type="button"
									aria-label="Download CV as PDF"
									onClick={downloadPDF}
								>
									Download CV
								</Button>
							</div>
							<div className="col-center"></div>
							<div className="col-right"></div>
						</div>
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