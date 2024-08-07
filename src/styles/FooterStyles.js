import styled from 'styled-components'

export const StyledFooter = styled.footer`
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 200;
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 2rem;
`

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
  }
  p {
    font-size: var(--text-s);
  }
  @media only screen and (max-width: 480px) {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`