import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Heading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
`

export const SubHeading = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin: 5rem 0;
  color: var(--text-color-lt);
`

export const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Wrapper = styled(motion.div)`
  width: 100%;
`


export const ProjectCard = styled.div`
  flex: 1;
  position: relative;
  background: ${props => `url(${props.$image})`};
  background-size: 100%;
  background-position: 50% 50%;
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
	height: 32rem;
  border-radius: 0.8rem;
	box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.5);
  overflow: hidden;
	transition: all 0.24s ease-out;
	z-index: 1;
  &:hover {
    background-size: 110%;
    box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.1);
  }
  @media only screen and (min-width: 450px) {
    &:hover {
      scale: 1.05;
    }
  }
`

export const ProjectContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all .12s ease-out;
  z-index: 2;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      backdrop-filter: blur(5px) saturate(1.5);
    }
  }
`

export const ProjectDetails = styled.div`
  position: absolute;
  top: calc(50% - 26px);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 2rem 0;
  z-index: 3;
  transition: all 0.24s ease-out;
  ${ProjectCard}:hover & {
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 0;
  }
`

export const Title = styled.h2`
  background-color: #252e3250;
  backdrop-filter: blur(5px) saturate(3);
  border-radius: 25px;
  white-space: nowrap;
  line-height: 2.2rem;
  padding: 1rem 2rem;
  font-family: var(--font-poppins);
	font-weight: bold;
	text-align: center;
  text-transform: uppercase;
  color: var(--text-color-light);
	font-size: var(--text-xl);
  z-index: 3;
  transition: all 0.24s ease-out;
  ${ProjectCard}:hover & {
    top: 3rem;
    backdrop-filter: blur(0);
    background-color: transparent;
  }
`

export const Description = styled.p`
  font-size: var(--text-r);
  line-height: 2rem;
	color: var(--text-color-light);
  text-align: center;
  padding: 0 3rem;
  opacity: 0;
  margin-top: 15rem;
  transition: all 0.24s ease-out;
  ${ProjectCard}:hover & {
    opacity: 1;
    margin-top: 0;
  }
`

export const Stack = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  opacity: 0;
  margin-top: 15rem;
  transition: all 0.24s ease-out;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .2rem;
    width: 6rem;
    height: 7rem;
    border-radius: 5px;
  }

  span {
    width: 100%;
    font-size: var(--text-xs);
    white-space: nowrap;
    text-align: center;
    margin-top: .2rem;
  }

  img {
    max-width: 100%;
    width: 3.2rem;
  }
  ${ProjectCard}:hover & {
    opacity: 1;
    margin-top: 0;
  }
`

export const Icons = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border-radius: 0.8rem;
	gap: 1rem;
  opacity: 0;
  margin-top: 15rem;
  transition: all 0.24s ease-out;
  a {
    display: flex;
    align-items: center;
    font-size: var(--text-l);
    font-family: var(--font-poppins);
    font-weight: bold;
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem;
    transition: all 0.06s ease-out;
    &:hover {
	    color: var(--button-hover);
    }
  }
  ${ProjectCard}:hover & {
    opacity: 1;
    margin-top: 0;
  }
`