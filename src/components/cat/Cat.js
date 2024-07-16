import React, { useState, useEffect, useRef } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import {
	CatSection,
	CatContent,
	CatHead,
	CatFace,
	CatEyes,
	CatEye,
} from '../../styles/CatStyles'
import catFace from '../../assets/img/catFaceBanner.webp'
import leftEye from '../../assets/img/leftEye.webp'
import rightEye from '../../assets/img/rightEye.webp'

export default function Cat() {
	const catRef = useRef(null)
	const screenWidth = useWindowSize()

	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Create an Intersection Observer instance
		const observer = new IntersectionObserver(
			(entries) => {
				// If the cat face container is in view, start listening to mousemove
				if (entries[0].isIntersecting) {
					setIsVisible(true)
					window.addEventListener('mousemove', handleMouseMove)
				} else {
					// If the cat face container is out of view, remove the mousemove listener
					setIsVisible(false)
					window.removeEventListener('mousemove', handleMouseMove)
				}
			},
			{
				root: null, // Use the viewport as the root
				rootMargin: '0px', // No margin
				threshold: 0.5, // 50% visibility threshold
			}
		)
		// Start observing the cat face container element
		observer.observe(catRef.current)
		// Clean up the observer on unmount
		return () => observer.disconnect()
	}, [isVisible])

	useEffect(() => {
		const shouldAddEvent = screenWidth >= 1000 && isVisible
		if (shouldAddEvent) {
			window.addEventListener('mousemove', handleMouseMove)
		}
		return () => {
			if (shouldAddEvent) {
				window.removeEventListener('mousemove', handleMouseMove)
			}
		}
	}, [screenWidth, isVisible])

	const handleMouseMove = (e) => {
		const mouseX = e.clientX
		const mouseY = e.clientY

		// Get the eye elements and their bounding boxes
		const leftEye = document.querySelector('.cat-leftEye')
		const rightEye = document.querySelector('.cat-rightEye')
		const leftEyeBoundingBox = leftEye.getBoundingClientRect()
		const rightEyeBoundingBox = rightEye.getBoundingClientRect()

		// Calculate the center positions of the eyes
		const leftEyeCenterX =
			leftEyeBoundingBox.left + leftEyeBoundingBox.width / 2
		const leftEyeCenterY =
			leftEyeBoundingBox.top + leftEyeBoundingBox.height * 2
		const rightEyeCenterX =
			rightEyeBoundingBox.left + rightEyeBoundingBox.width / 2
		const rightEyeCenterY =
			rightEyeBoundingBox.top + rightEyeBoundingBox.height * 2

		// Calculate the distance between the mouse and the eye centers
		const leftEyeDeltaX = mouseX - leftEyeCenterX - 1000
		const leftEyeDeltaY = mouseY - leftEyeCenterY * 1.75
		const rightEyeDeltaX = mouseX - rightEyeCenterX - 100
		const rightEyeDeltaY = mouseY - rightEyeCenterY * 1.75

		const maxEyeMove = 35 // Adjust this value to control the eye movement range

		// Calculate the eye movement within the specific range
		const leftEyeMoveX = (leftEyeDeltaX / window.innerWidth) * (maxEyeMove * 1.3)
		const leftEyeMoveY =
			(leftEyeDeltaY / window.innerHeight) * (maxEyeMove * 1.3)
		const rightEyeMoveX = (rightEyeDeltaX / window.innerWidth) * (maxEyeMove * 1.3)
		const rightEyeMoveY =
			(rightEyeDeltaY / window.innerHeight) * (maxEyeMove * 1.3)

		// Update the CSS style of the eye elements to apply the movement
		leftEye.style.transform = `translate(${leftEyeMoveX}px, ${leftEyeMoveY}px)`
		rightEye.style.transform = `translate(${rightEyeMoveX}px, ${rightEyeMoveY}px)`
	}


	return (
			<CatSection ref={catRef}>
				<CatContent>
					<CatHead>
						<div>
							<CatFace src={catFace} alt="Cat's face" />
							<CatEyes>
								<CatEye
									className="cat-leftEye"
									src={leftEye}
									alt="Cat's left eye"
								/>
								<CatEye
									className="cat-rightEye"
									src={rightEye}
									alt="Cat's right eye"
								/>
							</CatEyes>
						</div>
					</CatHead>
				</CatContent>
			</CatSection>
	)
}
