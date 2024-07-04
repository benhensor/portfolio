import React from 'react'
import styled from 'styled-components'

export default function Skew() {
  return (
    <Skewed>Skew</Skewed>
  )
}

const Skewed = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--wave-highlight-color);
  overflow: hidden;
  z-index: 0;
  transform: skewY(5deg);
  transform-origin: top right;
`