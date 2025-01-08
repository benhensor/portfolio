import styled from "styled-components";

export const ContactStatement = styled.div`
  color: var(--text-color-md);
  max-width: 60rem;
  position: relative;
  bottom: 5rem;
  p {
    font-size: clamp(var(--text-s), 5vw, var(--text-l));
    text-align: left;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 480px) {
    margin: 5rem 0;
    max-width: 25rem;
  }
`

export const ContactHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color-lt);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  .me {
    color: var(--text-color-lt);
  }
  .ow {
    color: #ff6039;
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
  width: 4rem;
  height: 4rem;
  margin-right: .5rem;
  rotate: 45deg;
`

export const ContactForm = styled.form`
  margin: 10rem 0;
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
  right: 1rem;
  font-size: 2rem;
`

export const InvalidIcon = styled.div`
  position: absolute;
  top: 38%;
  transform: translateY(-50%);
  right: 1rem;
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
  background: #2A2A2A;
  padding: 0.5em;
  font-size: 1em;
  color: var(--text-color-lt);
  border-bottom: ${({ $borderBottom }) => $borderBottom};
  margin-bottom: 1em;
  transition: all .12s;
  &::placeholder {
    color: #B8B8B8;
  }
  &:focus {
    outline: none;
    border-bottom: 3px solid var(--blue);
  }
`

export const ContactTextarea = styled.textarea`
  border: none;
  width: 100%;
  background: #2A2A2A;
  border-bottom: 3px solid var(--dkBlue);
  padding: 0.5em;
  font-size: 1em;
  color: var(--text-color-lt);
  resize: vertical;
  min-height: 10em;
  margin-bottom: 2em;
  outline: none;
  transition: all 0.12s;
  &::placeholder {
    color: #B8B8B8;
  }
  &:focus {
    outline: none;
    border-bottom: 3px solid var(--blue);
  }
`

export const ContactButton = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border-radius: 25px;
  background: #FFB347;
  color: var(--text-color-dk);
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.12s;
  &:hover {
    background: #fcce8c;
    color: #1A1A1A;
  }
`

export const ContactStatus = styled.p`
  font-size: 1.2em;
  color: ${({ $success }) => ($success ? 'green' : 'red')};
  margin-top: 1em;
`

export const ErrorMessage = styled.p`
  position: absolute;
  right: 30px;  // Position it to the left of the icon
  top: 32%;
  transform: translateY(-50%);
  color: var(--error);
  font-size: var(--text-r);
  margin: 0;
  background-color: #2A2A2A;  // Same as input background
  padding: 0 0.5rem;
`