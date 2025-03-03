import styled from 'styled-components'
import { ReactComponent as Send } from '../assets/icons/send.svg'

export const StyledHeader = styled.header`
	position: fixed;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 100vw;
	height: 4em;
	background-color: var(--background-static);
	user-select: none;
	z-index: 100;
`

export const HeaderContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	border-bottom: 0.2em solid var(--blue);
`

export const Navbar = styled.nav`
	width: 100%;
	max-width: 100rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: var(--background-static);
	color: white;
	@media screen and (max-width: 999px) {
		padding: var(--m-tablet);
	}
	@media screen and (max-width: 768px) {
		padding: var(--p-tablet);
	}
	@media screen and (max-width: 450px) {
		padding: var(--p-mobile);
	}
`

export const Block = styled.div`
	position: absolute;
	top: -1.4rem;
	left: -2em;
	width: 7em;
	height: 4em;
	background-color: var(--background-static);
`

export const Border = styled.div`
	position: absolute;
	top: -1em;
	left: -1em;
	width: 5em;
	height: 5em;
	border-radius: 50%;
	border: 0.2em solid var(--blue);
	background-color: var(--background-static);
`

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	height: 100%;
	z-index: 100;
	button {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: none;
		border: none;
		cursor: pointer;
		width: 5rem;
		height: 5rem;
		img {
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			background-color: var(--background-static);
		}
	}
`

export const HeaderName = styled.h1`
	font-size: 1.5em;
	font-weight: 100;
	margin-left: 0.3em;
	z-index: 100;
	color: #ffffff;
	transition: all 0.5s ease-in-out;
	@media screen and (max-width: 768px) {
		font-size: 1.2em;
	}
	@media screen and (max-width: 375px) {
		display: none;
	}
`

export const HeaderMenu = styled.ul`
	display: flex;
	align-items: center;
	gap: 2em;
	z-index: 10;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const Contact = styled.li`
	button {
		border: none;
		background-color: transparent;
		rotate: -45deg;
		&:hover {
			color: var(--orange);
		}
	}
`
export const StyledSend = styled(Send)`
	width: 1.5em;
	height: 1.5em;
	& path {
		fill: ${({ $activeLink }) =>
			$activeLink ? 'var(--orange)' : 'white'};
	}
	&:hover {
		& path {
			fill: var(--orange);
		}
	}
`

export const MenuControls = styled.button`
	display: none;
	background-color: transparent;
	border: none;
	color: white;
	z-index: 1000;
	&:hover {
		color: var(--orange);
	}
	@media screen and (max-width: 768px) {
		display: block;
	}
`

export const MobileMenu = styled.ul`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
	margin-top: 4em;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: calc(100vh - 4em);
	gap: 2em;
	list-style-type: none;
	padding: 4em 0;
	opacity: 0;
	background-color: var(--background-static);
	display: flex;
	transform: translateY(-100%);
	transition: all 0.3s ease-in-out;
	@media screen and (max-width: 768px) {
		${({ $isOpen }) =>
			$isOpen &&
			`
            opacity: 1;
            transform: translateY(0);
        `}
	}
`

export const Icons = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2em;
	a {
		width: 2.5em;
		height: 2.5em;
		background: transparent;
		display: inline-flex;
		border-radius: 25%;
		align-items: center;
		justify-content: center;
		line-height: 1;
		border: 1px solid rgba(255, 255, 255, 0.5);
		position: relative; // Added to ensure ::before works correctly
		&::before {
			content: '';
			width: 2.5em;
			height: 2.5em;
			position: absolute;
			background-color: var(--orange);
			border-radius: 25%;
			transform: scale(0);
			border: 1px solid rgba(255, 255, 255, 0.5);
			transition: 0.1s ease-in-out;
		}
		&:hover::before {
			transform: scale(1);
			color: #333;
		}
		img {
			width: 1.5em;
			z-index: 1;
			transition: 0.1s ease-in-out;
		}
		&:hover {
			svg {
				filter: brightness(0) saturate(100%) invert(0%) sepia(7%)
					saturate(98%) hue-rotate(346deg) brightness(95%)
					contrast(86%);
			}
		}
	}
`