import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Tech from './components/tech/Tech'
import About from './components/About'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Tech />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	)
}