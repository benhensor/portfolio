import React from 'react'
import styled from 'styled-components'

export default function RightArrow() {
	return (
		<SVG
			fill="#000000"
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
		>
			<path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
		</SVG>
	)
}

const SVG = styled.svg`
  fill: inherit;
  width: 100%;
  height: 100%;
`