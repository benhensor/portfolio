import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export default function Project({ project }) {
  return (
    <ProjectCard key={project.key}>
      <ImageContainer className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </ImageContainer>
      <ProjectContent>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Icons>
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="project-icon-github" style={{ fontSize: '2.6rem'}} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live site
          </a>
        </Icons>
      </ProjectContent>
    </ProjectCard>
  )
}

const ProjectCard = styled.div`
  flex: 1;
  position: relative;
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
	height: 32rem;
  border-radius: 0.8rem;
	box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.5);
  overflow: hidden;
	transition: all 0.3s ease-out;
	z-index: 1;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const ProjectContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all .3s ease-out;
  z-index: 2;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
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

const Title = styled.h2`
  position: absolute;
  backdrop-filter: blur(5px) saturate(1.5);
  border-radius: 0.8rem;
  width: fit-content;
  padding: 0.2rem 0.3rem;
  font-family: var(--font-poppins);
	font-weight: bold;
	text-align: center;
  color: var(--text-color-light);
	font-size: var(--text-xl);
  transition: all 0.25s ease-out;
  transform: translateY(0);
  z-index: 3;
  ${ProjectCard}:hover & {
    transform: translateY(-80px);
    backdrop-filter: blur(0) saturate(1);
  }
`

const Description = styled.p`
  position: absolute;
  font-size: var(--text-l);
	color: var(--text-color-light);
  text-align: center;
  padding: 0 3rem;
  opacity: 0;
  transform: translateY(200px);
  transition: all .27s ease-in;
  z-index: 4;
  // Pseudo-elements for top and bottom borders
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 10rem;
    right: 10rem;
    height: 1px; // Adjust border thickness as needed
    background-color: var(--orange); // Use the same color as the text or change as desired
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
    transform-origin: left;
  }
  &::before {
    top: -1rem;
  }
  &::after {
    bottom: -1rem;
  }
  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translateY(0);
    &::before,
    &::after {
      transform: scaleX(1);
    }
  }
`

const Icons = styled.div`
  position: absolute;
  display: flex;
	justify-content: space-evenly;
	align-items: center;
	overflow: hidden;
	border-radius: 0.8rem;
	gap: 4rem;
  z-index: 5;
  a {
    display: flex;
    align-items: center;
    font-size: var(--text-l);
    font-family: var(--font-poppins);
    font-weight: bold;
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem;
    transition: all 0.1s ease-out;
    &:hover {
	    color: var(--button-hover);
    }
  }
  opacity: 0;
  transform: translateY(300px);
  transition: all .3s ease-in;

  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translateY(90px);
  }
`