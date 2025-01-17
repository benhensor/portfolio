import React from "react";
import styled from "styled-components";

export default function Wave({ section, transform, width }) {

	let fillColor;

	switch (section) {
		case 'hero':
			fillColor = '#141717';
			break;
		case 'about':
			fillColor = '#de6262';
			break;
		case 'tech':
			fillColor = '#141717';
			break;
		case 'journey':
			fillColor = '#71B280';
			break;
		case 'projects':
			fillColor = '#141717';
			break;
		case 'cat':
			fillColor = '#FFB347';
			break;
		case 'contact':
			fillColor = '#141717';
			break;
		default:
			fillColor = '#141717';
	}

	return (
		<Container
			style={{ transform: transform }}
			$borderBottom={fillColor}
		>
			<Svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				style={{ width: width }}
			>
				<StrokePath
					d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				></StrokePath>
				<ShapePath
					$fill={fillColor}
					d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
				></ShapePath>
			</Svg>
		</Container>
	)
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
	border-bottom: 3px solid ${props => props.$borderBottom};
`

const Svg = styled.svg`
  position: relative;
  display: block;
	height: 10rem;
	@media only screen and (max-width: 480px) {
		height: 5.2rem;
	}
`

const StrokePath = styled.path`
  stroke: var(--blue);
  stroke-width: 5px;
`

const ShapePath = styled.path`
  fill: ${props => props.$fill};
`



