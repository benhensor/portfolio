import React from 'react'
import styled from 'styled-components'

export default function Work() {
	return (
		<SVG
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15"
			/>
		</SVG>
	)
}

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;
  path {
    stroke: inherit;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`