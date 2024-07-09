import React from 'react'
import styled from 'styled-components'

export default function MenuIcon({ onClick, isOpen }) {
	
	return (
		<MenuBars onClick={onClick}>
			{Array.from({ length: 3 }).map((_, index) => (
				<Bar key={index} $isActive={isOpen} />
			))}
		</MenuBars>
	)
}

const MenuBars = styled.div`
	display: none;
	@media only screen and (max-width: 1199px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 24px;
		height: 18px;
		cursor: pointer;
    &:hover div {
      background-color: var(--orange); /* Change color on hover */
    }
	}
`

const Bar = styled.div`
	width: 25px;
	height: 3px;
	background-color: var(--white);
	border-radius: 1px;
	transition: all 0.12s ease-in-out;
	transform-origin: center;

	${({ $isActive }) =>
    $isActive &&
    `
    background-color: var(--orange);
    &:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `}
`