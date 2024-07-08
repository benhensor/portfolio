import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AboutContainer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: var(--background-color);
	@media screen and (max-width: 999px) {
		padding: var(--m-desktop);
	}
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
	}
`

export const AboutContent = styled(motion.div)`
	max-width: 100rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 20rem 0 30rem 0;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		margin: 0 0 20rem 0;
	}
`

export const BGWord = styled.span`
	position: absolute;
	top: 50%;
	left: 35%;
	transform: translate(-50%, -50%);
	font-size: clamp(4rem, 20vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dark);
	z-index: 0;
	@media screen and (max-width: 768px) {
		top: 55%;
		left: 50%;
	}
`

export const TextContainer = styled(motion.div)`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	h1 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		color: var(--accent-color);
		span {
			color: var(--accent-color);
		}
	}
	h2 {
		font-size: clamp(1.5rem, 3vw, 2.5rem);
		margin-bottom: 1rem;
		color: var(--highlight-color);
	}
	p {
		font-size: clamp(0.8rem, 3vw, 1.6rem);
		margin-bottom: 1.6rem;
		color: var(--text-color-medium);
	}
	div {}
	button {
		margin: 2rem 2rem 0 0;
		padding: 1rem 2rem;
		font-size: 1.6rem;
		font-weight: 700;
		background: var(--accent-color);
		color: var(--text-color-dark);
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.1s ease;
		&:hover {
			background: var(--highlight-color);
			color: var(--text-color-dark);
		}
	}
	@media screen and (max-width: 768px) {
		padding: 0 5rem;
	}
	@media screen and (max-width: 546px) {
		gap: 1rem;
		padding: 0;
		p {
			margin-bottom: 1rem;
			color: var(--text-color-medium);
		}
		button {
			margin: 1rem 1.5rem 0 0;
			padding: 0.8rem 1.5rem;
			font-size: 1.4rem;
		}
	}
`

export const ImageContainer = styled(motion.div)`
	z-index: 0;
	min-width: 35rem;
	height: 35rem;
	margin-left: 2rem;
	border: 2px solid var(--accent-color);
	border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
	background: #000;
	animation: morph 10s linear infinite alternate;
	@keyframes morph {
		0% {
			border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
		}
		100% {
			border-radius: 40% 60%;
		}
	}
	@media screen and (max-width: 768px) {
		min-width: 23rem;
		height: 23rem;
		position: relative;
		top: 20rem;
		left: 14rem;
	}
	@media screen and (max-width: 546px) {
		min-width: 15rem;
		height: 15rem;
		top: 15rem;
		left: 8rem;
	}
`

export const Image = styled.img`
	width: 25rem;
	height: auto;
	object-position: center;
	position: relative;
	top: -2.7em;
	left: 2.5em;
	@media screen and (max-width: 768px) {
		top: -2.5em;
		left: 2.5em;
		width: 15rem;
	}
	@media screen and (max-width: 546px) {
		top: -2rem;
		left: 2rem;
		width: 10rem;
	}
`
