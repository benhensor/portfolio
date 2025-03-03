import React from 'react'
import styled from 'styled-components'

export default function Education() {
	return (
		<SVG
			width="800px"
			height="800px"
			viewBox="0 0 260 188"
		>
			<path
				d="M134.3,109.2L202,83.8V146c0,13.4-32.2,24.3-72,24.3S58,159.4,58,146V83.8l67.9,25.4l4.2,1.6L134.3,109.2z M130.1,98L258,50
	L130.1,2L2,50l20,7.5v81.8c-4.7,2.2-8,7.1-8,12.7v34h28v-34c0-5.7-3.3-10.6-8.1-12.8V61.9L130.1,98z"
			/>
		</SVG>
	)
}

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  fill: inherit;
`