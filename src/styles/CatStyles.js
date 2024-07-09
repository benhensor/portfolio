import styled from 'styled-components'

export const CatSection = styled.section`
	width: 100%;
	height: auto;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`

export const CatContent = styled.div`
	width: 100%;
	max-width: 100rem;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const CatHead = styled.div`
	position: relative;
	mix-blend-mode: screen;
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: 43em;
	overflow: hidden;
`

export const CatFace = styled.img`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	max-width: 100rem;
	z-index: 1;
`

export const CatEyes = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 60rem;
	z-index: 0;
`

export const CatEye = styled.img`
	width: 30rem;
	height: 30rem;
	z-index: 0;
`