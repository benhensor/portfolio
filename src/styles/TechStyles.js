import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TechContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
  bottom: 5rem;
  @media only screen and (max-width: 450px) {
    bottom: 5rem;
  }
`

export const TechCategoriesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    padding-top: 10rem;
  }
`