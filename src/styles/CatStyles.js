import styled from 'styled-components'

export const CatSection = styled.section`
	width: 100%;
	height: auto;
	@media only screen and (max-width: 999px) {
		display: none;
	}
`

export const CatContent = styled.div`
	width: 100%;
	max-width: 100rem;
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
	height: fit-content;
	overflow: hidden;
`

export const CatFace = styled.img`
	width: 100rem;
	height: auto;
	z-index: 2;
`

export const CatEyes = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: space-between;
	width: 60rem;
	z-index: -1;
`

export const CatEye = styled.img`
	width: 30rem;
	height: 30rem;
	z-index: 0;
`