import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Heading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
`

export const SubHeading = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin: 5rem 0;
  color: var(--text-color-md);
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