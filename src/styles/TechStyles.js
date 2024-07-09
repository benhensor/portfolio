import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TechContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`

export const TechCategoriesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50rem;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    padding-top: 10rem;
  }
`