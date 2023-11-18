import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/app.css'

function App() {
	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => console.log(data))
	}, [])

	return (
		<main className='app'>
			<Header />
			<div className='content'>
				<Hero />
				<Skills />
				<Journey />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</main>
	);
}

export default App