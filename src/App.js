import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Tech from './components/tech/Tech'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/app.css'

export default function App() {
	return (
		<main className="app">
			<Header />
			<div className="content">
				<Hero />
				<About />
				<Tech />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</main>
	)
}
