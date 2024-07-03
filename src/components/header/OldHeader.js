import React, { useState, useEffect, useCallback } from 'react'
import NavLink from './NavLink'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/img/logo2023.webp'
import navIcon1 from '../../assets/icons/nav-icon1.svg'
import navIcon2 from '../../assets/icons/nav-icon2.svg'
import navIcon3 from '../../assets/icons/nav-icon3.svg'
import send from '../../assets/icons/send.svg'
import '../../styles/header.css'

export default function Header() {
	const [activeLink, setActiveLink] = useState('home')
	const [isOpen, setIsOpen] = useState(false)
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

	const handleClick = useCallback(() => {
		setIsOpen((prevIsOpen) => !prevIsOpen)
	}, [])

	const onUpdateActiveLink = useCallback(
		(value) => {
			if (activeLink === value) {
				return
			}
			setActiveLink(value)
			const section = document.getElementById(value)
			const header = document.querySelector('header')
			if (section && header) {
				const headerHeight = header.offsetHeight
				const targetPosition = section.offsetTop - headerHeight

				setTimeout(() => {
					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth',
					})
				}, 100)
			}
			setIsOpen(false)
		},
		[activeLink]
	)

	const scrollToTop = useCallback(() => {
		onUpdateActiveLink('home')
	}, [onUpdateActiveLink])

	return (
		<header className={scrolled ? 'scrolled' : ''}>
			<nav>
				<div className="header-logo-name">
					<a
						href="#home"
						className="header-logo-container"
						onClick={scrollToTop}
					>
						<img className="header-logo" src={logo} alt="logo" />
					</a>
					<div className="nav-mobile-name">
						<h1>Ben Hensor Dev</h1>
					</div>
				</div>

				<button className="mobile-controls" onClick={handleClick}>
					{isOpen ? <FaTimes className="visible" /> : <FaBars />}
				</button>

				<div
					className={`nav-menu-container ${isOpen ? 'visible' : ''} ${
						scrolled ? 'scrolled' : ''
					}`}
				>
					<div className="nav-menu">
						<ul className="header-menu">
							<NavLink
								to="about"
								name="About"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="skills"
								name="Tech Stack"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="projects"
								name="Projects"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
						</ul>
					</div>

					<div className="header-icons">
						<div className="icons">
							<a
								href="https://github.com/benhensor"
								rel="noreferrer"
								target="_blank"
							>
								<img src={navIcon1} alt="Github" />
							</a>
							<a
								href="https://www.linkedin.com/in/benhensor/"
								rel="noreferrer"
								target="_blank"
							>
								<img src={navIcon2} alt="LinkedIn" />
							</a>
							<a
								href="https://www.imdb.com/name/nm5978088/?ref_=rvi_nm"
								rel="noreferrer"
								target="_blank"
							>
								<img src={navIcon3} alt="IMDb" />
							</a>
						</div>
						<a href="#connect">
							<button className="connect-button">
								<span>Let's Connect!</span>
							</button>
						</a>
						<a href="#connect">
							<img
								src={send}
								alt="Send"
								className="connect-icon"
								onClick={() => handleClick()}
							/>
						</a>
					</div>
				</div>
			</nav>
		</header>
	)
}
