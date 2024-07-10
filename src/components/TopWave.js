import React from "react";
import styled from "styled-components";

export default function TopWave({ transform, width, height }) {
	return (
		<Container
			style={{ transform: transform }}
		>
			<Svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				style={{ width: width, height: height }}
			>
				<StrokePath
					d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				></StrokePath>
				<ShapePath
					d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
				></ShapePath>
			</Svg>
		</Container>
	)
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 0;
	overflow: hidden;
	z-index: 0;
`

const Svg = styled.svg`
  position: relative;
  display: block;
`

const StrokePath = styled.path`
  stroke: var(--blue);
  stroke-width: 3px;
`

const ShapePath = styled.path`
  fill: #141717;
`