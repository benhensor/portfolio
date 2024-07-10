import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function BackgroundWord({ section }) {

  const [scrollY, setScrollY] = useState(0)
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <BGWord>
      <Parallax $scrollY={scrollY}>
        <Section>{section}</Section>
      </Parallax>
    </BGWord>
  )
}

const BGWord = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Parallax = styled.div.attrs(props => ({
  style: {
    transform: `translateY(${props.$scrollY * 0.5}px)`
  }
})
)`
  width: 100%;
  height: 100vh;
  transition: transform 0.1s ease-out;
`

const Section = styled.span`
  word-wrap: nowrap;
  text-align: center;
	font-size: clamp(4rem, 14vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dk);
`