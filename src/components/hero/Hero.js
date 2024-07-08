import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import HeroAnimation from './HeroAnimation'
import HeroTitleAnimation from './HeroTitleAnimation'
import HeroPhrases from './HeroPhrases'
import HeroArrow from './HeroArrow'
import Wave from '../Wave'

export default function Hero() {
	const heroRef = useRef(null)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<HeroSection id='home' ref={heroRef} $scrolled={scrolled}>
			<HeroContent>
				<HeroAnimation />
				<HeroTitleContainer>
					<HeroTitleAnimation title="Ben Hensor" />
					<HeroPhrases />
					<HeroArrow />
				</HeroTitleContainer>
			</HeroContent>
			<Wave transform="none" width="calc(175% + 3px)" height="100px" />
		</HeroSection>
	)
}

const HeroSection = styled.div`
	position: relative;
	width: 100vw;
	height: 180rem;
	min-height: 0;
	background-color: #000;
	transition: all 0.5s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	@media only screen and (max-width: 768px) {
		height: 100rem;
	}
`

const HeroContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	overflow: hidden;
`

const HeroTitleContainer = styled.div`
	position: absolute;
	top: 30%;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	mix-blend-mode: screen;
	opacity: ${({ $scrolled }) => ($scrolled ? 0 : 0.75)};
	transition: all 0.1s ease-in-out;
`
