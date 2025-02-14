import React from 'react'
import { motion } from 'framer-motion'
import Wave from './Wave'
import { useWindowSize } from '../hooks/useWindowSize'
import { Section, Container, BGWord } from '../styles/GlobalStyles'
import { journey } from '../data'
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

	return (
		<Section id="journey">
			<BGWord>JOURNEY</BGWord>
			<Container id="journey-container">
				<Timeline>
					<VerticalLine
						as={motion.div}
						initial={{ height: 0 }}
						whileInView={{ height: '100%' }}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
					/>
					<div className="events">
						{journey.events.map((event) => (
							<Event
								key={event.key}
								$side={`${event.key % 2 === 0 ? 'left' : 'right'}`}
								$eventKey={event.key}
								as={motion.div}
								initial={{
									opacity: 0,
								}}
								whileInView={{
									opacity: 1,
								}}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<div className="row">
									<motion.div
										className="event-date"
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 0.3, delay: 0.5 }}
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
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											transition={{
												delay: 0.4,
												ease: 'easeOut',
											}}
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
											initial={{ scaleX: 0 }}
											whileInView={{ scaleX: 1 }}
											transition={{
												duration: 0.5,
												ease: 'easeOut',
											}}
										>
											<motion.div
												className="event-icon-container"
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{
													delay: 0.3,
													duration: 0.3,
													ease: 'easeOut',
												}}
											>
												<div className="event-icon">
													{event.type === 'education' ? (
														<Education />
													) : (
														<Work />
													)}
												</div>
											</motion.div>
											<motion.div
												className="event-icon-arrow"
												initial={{
													scale: 0,
													x:
														event.key % 2 === 0
															? 20
															: -20,
												}}
												whileInView={{
													scale: 1,
													x: 0,
												}}
												transition={{
													delay: 0.5,
													duration: 0.12,
													ease: 'easeOut',
												}}
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
									</div>
									<motion.div
										className="event-point"
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{ delay: 0.2, ease: 'easeOut' }}
									/>
									<div className="spacer-opposite"></div>
								</div>
								<div className="row">
									<EventContent
										$side={`${
											event.key % 2 === 0 ? 'left' : 'right'
										}`}
										as={motion.div}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											delay: 0.3,
											duration: 0.24,
											ease: 'easeInOut',
										}}
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
									as={motion.button}
									type="button"
									aria-label="Download CV as PDF"
									onClick={downloadPDF}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
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

// import React from 'react'
// import Wave from './Wave'
// import { useWindowSize } from '../hooks/useWindowSize'
// import { Section, Container, BGWord } from '../styles/GlobalStyles'
// import { journey } from '../data'
// import RightArrow from './icons/RightArrow'
// import Education from './icons/Education'
// import Work from './icons/Work'
// import {
// 	Timeline,
// 	Event,
// 	Button,
// } from '../styles/JourneyStyles'

// export default function Journey() {
// 	const windowWidth = useWindowSize()[0] // Since it returns [width]
// 	const mobileView = windowWidth < 450

// 	const downloadPDF = () => {
// 		const link = document.createElement('a')
// 		link.href = '/api/serve-cv.php'
// 		link.click()
// 	}

// 	const insertBreak = (str) => {
//     if (!str) return [str]

//     if (mobileView) {
//       if (str.includes(' - ')) {
//         const breakIndex = str.indexOf(' - ')
//         return [str.slice(0, breakIndex), str.slice(breakIndex + 3)]
//       }
//       if (str.includes(' & ')) {
//         const breakIndex = str.indexOf(' & ')
//         return [str.slice(0, breakIndex), str.slice(breakIndex)]
//       }
//     }
//     return [str]
//   }

// 	const formatLineBreak = (title) => {
// 		const titleParts = insertBreak(title)
// 		return (
// 			<>
// 				{titleParts[0]}
// 				{titleParts.length > 1 && <br />}
// 				{titleParts[1]}
// 			</>
// 		)
// 	}

// 	return (
// 		<Section id="journey">
// 			<BGWord>JOURNEY</BGWord>
// 			<Container id="journey-container">
// 				<Timeline>
//					<VerticalLine
//						as={motion.div}
//						initial={{ height: 0 }}
//						whileInView={{ height: '100%' }}
//						transition={{ duration: 1.5, ease: 'easeInOut' }}
//					/>
// 					<div className="vertical-line"></div>
// 					{journey.events.map((event) => (
// 						<Event
// 							key={event.key}
// 							className={`${
// 								event.key % 2 === 0 ? 'left' : 'right'
// 							}`}
// 							$eventKey={event.key}
// 						>
// 							<div className="row">
// 								<div className="event-date">
// 									<span>{event.date}</span>
// 								</div>
// 								<div className="spacer-opposite"></div>
// 							</div>
// 							<div className="row">
// 								<div className="event-point-line-icon">
// 									<div className="spacer-event-line"></div>
// 									<div className="event-arrow">
// 										<RightArrow />
// 									</div>
// 									<div className="event-dotted-line">
// 										<div className="event-icon-container">
// 											<div className="event-icon">
// 												{event.type === 'education' ? (
// 													<Education />
// 												) : (
// 													<Work />
// 												)}
// 											</div>
// 										</div>
// 										<div className="event-icon-arrow">
// 											<RightArrow />
// 										</div>
// 									</div>
// 								</div>
// 								<div className="event-point"></div>
// 								<div className="spacer-opposite"></div>
// 							</div>
// 							<div className="row">
// 								<div className="event-content-container">
// 									<div className="event-content">
// 										<p className="event-title">
// 											{formatLineBreak(event.title)}
// 										</p>
// 										<p className="event-provider">
// 											{formatLineBreak(event.provider)}
// 										</p>
// 										<p className="event-description">
// 											{event.description}
// 										</p>
// 									</div>
// 								</div>
// 								<div className="spacer-opposite"></div>
// 							</div>
// 						</Event>
// 					))}
// 					<div className="row-cv-btn">
// 						<div className="col-left">
// 							<Button
// 								type="button"
// 								aria-label="Download CV as PDF"
// 								onClick={downloadPDF}
// 							>
// 								Download CV
// 							</Button>
// 						</div>
// 						<div className="col-center"></div>
// 						<div className="col-right"></div>
// 					</div>
// 				</Timeline>
// 			</Container>
// 			<Wave
// 				section={'journey'}
// 				transform="none"
// 				width="calc(180% + 3px)"
// 			/>
// 		</Section>
// 	)
// }
