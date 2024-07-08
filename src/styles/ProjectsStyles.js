import styled from 'styled-components'

export const ProjectsSection = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ProjectsContainer = styled.div`
	max-width: 1000px;
  width: 100%;
  margin: 10rem 0 20rem 0;
	padding: 5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
  }
  h2 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    margin: 5rem 0;
  }
	@media only screen and (max-width: 999px) {
		padding: 5rem 3rem;
	}
	@media only screen and (max-width: 768px) {
		padding: 5rem 2.5rem;
	}
	@media only screen and (max-width: 480px) {
		padding: 5rem 2rem;
    margin: 5rem 0 10rem 0;
	}
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

export const Wrapper = styled.div`
  width: 100%;
`