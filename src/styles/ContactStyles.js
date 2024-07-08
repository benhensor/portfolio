import styled from 'styled-components'

export const ContactSection = styled.section`
  background: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 999px) {
    padding: 5rem 0rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 2.5rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 5rem 2rem;
  }
`

export const ContactMessage = styled.div`
  font-size: var(--text-xl);
  color: var(--text-color-medium);
  max-width: 60rem;
  margin: 10rem 0;
  p {
    font-size: clamp(1.6rem, 2vw, 2.4rem);
    text-align: left;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 480px) {
    margin: 5rem 0;
  }
`

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10rem;
`

export const ContactHeader = styled.h1`
  font-size: var(--text-xxxxl);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  img {
    height: 6rem;
    transform: rotate(45deg);
    margin-right: 1rem;
  }
  .ow {
    color: var(--accent-color);
  }
  @media only screen and (max-width: 999px) {
    font-size: var(--text-xxxl);
    img {
      height: 5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: var(--text-xxl);
    img {
      height: 4rem;
    }
  }
  @media only screen and (max-width: 480px) {
    font-size: var(--text-xl);
    img {
      height: 3rem;
    }
    .ow {
      display: none;
    }
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50rem;
  button {
    display: flex;
    align-items: center;
    background-color: var(--button-inactive);
    color: var(--text-color-medium);
    font-size: var(--text-l);
    letter-spacing: 0.1rem;
    font-weight: bold;
    padding: 1rem 4rem;
    border: none;
    cursor: pointer;
    transition: all background-color 0.1s;
    margin: 4rem 0;
    border-radius: 0.3rem;
    span {
      flex: 1;
      text-align: center;
    }
    &:hover {
      color: var(--text-color-dark);
      background-color: var(--button-hover);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  label {
    color: var(--text-color-medium);
    margin-bottom: 1rem;
    border-radius: 0.3rem;
  }
  input {
    padding: 1rem;
    border: none;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    &:focus {
      outline: 2px solid var(--accent-color);
    }
    textarea {
      padding: 1rem;
      border: none;
      margin-bottom: 4rem;
      resize: none;
      border-radius: 0.3rem;
      font-family: var(--font-poppins);
      &:focus {
        outline: 2px solid var(--accent-color);
      }
    }
  }
`

export const StatusMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
  p {
    font-size: var(--text-l);
    color: var(--text-color-medium);
    margin-bottom: 2rem;
  }
`