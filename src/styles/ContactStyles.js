import styled from "styled-components";

export const ContactSection = styled.section`
  position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto 20rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 999px) {
    padding: 0 2rem;
  }
`

export const ContactStatement = styled.div`
  font-size: var(--text-xl);
  color: var(--text-color-md);
  max-width: 60rem;
  margin: 10rem 0;
  p {
    font-size: clamp(1.6rem, 2vw, 2rem);
    text-align: left;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 480px) {
    margin: 5rem 0;
    max-width: 50rem;
  }
`

export const ContactHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color-lt);
  margin-bottom: 1em;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  .me {
    color: var(--text-color-lt);
  }
  .ow {
    color: var(--orange);
  }
  @media only screen and (max-width: 768px) {
    .me {
      color: var(--orange);
    }
    .ow {
      display: none;
    }
  }
`

export const ContactIcon = styled.img`
  position: relative;
  bottom: clamp(.215rem, 1vw, .75rem);
  width: clamp(3rem, 5vw, 5rem);
  margin-right: .5rem;
  rotate: 45deg;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  color: var(--text-color-lt);
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

export const ValidIcon = styled.div`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 2rem;
`

export const InvalidIcon = styled.div`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 2rem;
`

export const ContactLabel = styled.label`
  font-size: 1.2rem;
  color: var(--text-color-soft);
  margin-left: 1rem;
  margin-bottom: 0.2em;
`

export const ContactInput = styled.input`
  border: none;
  width: 100%;
  background: #222;
  padding: 0.5em;
  font-size: 1em;
  color: var(--text-color-lt);
  border-bottom: ${({ $borderBottom }) => $borderBottom};
  margin-bottom: 1em;
  transition: all .12s;
  &::placeholder {
    color: var(--text-color-dk);
  }
  &:focus {
    outline: none;
    border-bottom: 3px solid var(--blue);
  }
`

export const ContactTextarea = styled.textarea`
  border: none;
  width: 100%;
  background: #222;
  border-bottom: 3px solid var(--dkBlue);
  padding: 0.5em;
  font-size: 1em;
  color: var(--text-color-lt);
  border-radius: 0.5rem;
  resize: vertical;
  min-height: 10em;
  margin-bottom: 2em;
  outline: none;
  transition: all 0.12s;
  &::placeholder {
    color: var(--text-color-dk);
  }
  &:focus {
    outline: none;
    border-bottom: 3px solid var(--blue);
  }
`

export const ContactButton = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border-radius: 0.5rem;
  background: var(--orange);
  color: var(--text-color-dk);
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: var(--ltOrange);
    color: var(--text-color-dk);
  }
`

export const ContactStatus = styled.p`
  font-size: 1.2em;
  color: ${({ $success }) => ($success ? 'green' : 'red')};
  margin-top: 1em;
`

export const ErrorMessage = styled.p`
  color: var(--error);
  font-size: 0.8rem;
  margin-top: -0.8em;
  margin-bottom: 0.8em;
  margin-left: 1rem;
`