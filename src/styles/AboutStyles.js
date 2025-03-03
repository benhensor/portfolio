import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AboutContent = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	bottom: 5rem;
	@media screen and (max-width: 768px) {
		bottom: 15rem;
		flex-direction: column-reverse;
	}
	@media screen and (max-width: 450px) {
		bottom: 5rem;
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
		color: var(--orange);
	}
	h2 {
		font-size: clamp(1.6rem, 3vw, 2.5rem);
		margin-bottom: 1rem;
		color: var(--ltOrange);
	}
	p {
		font-size: var(--text-r);
		margin-bottom: 1.6rem;
		color: var(--text-color-md);
		line-height: 1.6;
		z-index: 2;
	}
	div {}
	button {
		margin: 2rem 2rem 0 0;
		padding: 1rem 2rem;
		font-size: var(--text-r);
		font-weight: 700;
		background: var(--orange);
		color: var(--black);
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.1s ease;
		&:hover {
			background: var(--ltOrange);
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
			color: var(--text-color-md);
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
	border: 2px solid var(--orange);
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
		top: 14.5rem;
		left: 11rem;
	}
`

export const Image = styled.img`
  width: 25rem;
  height: 37rem;
  object-fit: cover;
  object-position: center;
  position: relative;
  top: -2.7em;
  left: 2.5em;
  aspect-ratio: 250/370;

  @media screen and (max-width: 768px) {
    width: 15rem;
    height: 22.2rem;
    top: -2.5em;
    left: 2.5em;
  }

  @media screen and (max-width: 546px) {
    width: 10rem;
    height: 14.8rem;
    top: -2rem;
    left: 2rem;
  }
`
