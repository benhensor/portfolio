import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Tech from './components/tech/Tech'
import About from './components/About'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import styled from 'styled-components'
import './styles/app.css'

export default function App() {
	return (
		<Main className="app">
			<Header />
			<Content>
				<Hero />
				<About />
				<Tech />
				<Projects />
				<Contact />
			</Content>
			<Footer />
		</Main>
	)
}

const Main = styled.main`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Content = styled.div`
	/* margin-top: 10rem; */
	flex: 1;
`
