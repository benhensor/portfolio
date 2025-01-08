import React, { useRef, useState, useEffect, useCallback } from 'react'
import NavLink from './NavLink'
import {
	StyledHeader,
	HeaderContent,
	Block,
	Border,
	Navbar,
	LogoContainer,
	HeaderName,
	HeaderMenu,
	MenuControls,
	MobileMenu,
	Icons,
} from '../../styles/HeaderStyles'
import NavIcon1 from '../icons/NavIcon1'
import NavIcon2 from '../icons/NavIcon2'
import NavIcon3 from '../icons/NavIcon3'
import Logo from '../../assets/img/logo2023.webp'
import MenuIcon from '../icons/MenuIcon'

export default function Header() {
	
	const headerRef = useRef(null)
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

	const toggleMenu = useCallback(() => {
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
				const targetPosition = value === 'home' ? 0 : section.offsetTop - headerHeight

				setTimeout(() => {
					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth',
					})
				}, 100)
			}
			setIsOpen(false)
		},
		[activeLink, setActiveLink]
	)

	const scrollToTop = useCallback(() => {
		onUpdateActiveLink('home')
	}, [onUpdateActiveLink])

	return (
		<>
			<StyledHeader ref={headerRef} $scrolled={scrolled}>
				<HeaderContent>
					<Navbar>
						<LogoContainer>
							<Border></Border>
							<Block></Block>
							<button type="button" aria-label="Logo, scroll to top" onClick={scrollToTop}>
								<img src={Logo} alt="Ben Hensor Development" />
							</button>
							<HeaderName $scrolled={scrolled}>
								benHensor.dev
							</HeaderName>
						</LogoContainer>
						<HeaderMenu>
							<NavLink
								to="about"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="tech"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="journey"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="projects"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="contact"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
								isMobile={false}
							/>
						</HeaderMenu>
						<MenuControls
							type="button"
							aria-label="Toggle navigation"
							aria-expanded={isOpen}
						>
							<MenuIcon isOpen={isOpen} onClick={() => toggleMenu(!isOpen)}></MenuIcon>
						</MenuControls>
					</Navbar>
				</HeaderContent>
			</StyledHeader>
			<MobileMenu $isOpen={isOpen}>
				<NavLink
					to="about"
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
				/>
				<NavLink
					to="tech"
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
				/>
				<NavLink
					to="journey"
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
				/>
				<NavLink
					to="projects"
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
				/>
				<NavLink
					to="contact"
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
					isMobile={true}
				/>
				<Icons>
					<a
						aria-label="Visit my Github profile"
						href="https://github.com/benhensor"
						rel="noreferrer"
						target="_blank"
					>
						<NavIcon1 />
					</a>
					<a
						aria-label="Visit my LinkedIn profile"
						href="https://www.linkedin.com/in/benhensor/"
						rel="noreferrer"
						target="_blank"
					>
						<NavIcon2 />
					</a>
					<a
						aria-label="Visit my IMDb profile"
						href="https://www.imdb.com/name/nm5978088/?ref_=rvi_nm"
						rel="noreferrer"
						target="_blank"
					>
						<NavIcon3 />
					</a>
				</Icons>
			</MobileMenu>
		</>
	)
}