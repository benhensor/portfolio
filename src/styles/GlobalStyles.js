import styled, { createGlobalStyle } from 'styled-components'
import '../assets/fonts/fonts.css'

const GlobalStyles = createGlobalStyle`
  :root {


    /* Global Colours */
    --orange: #de9e36;
    --ltOrange: #f9fad0;
    --blue: #00c5c5;
    --dkBlue: #005c5c;  
    --ltBlue: #d8fdfe;
    --error: #bb1f1f;
    --white: #fff;
    --black: #000;
    --contact-input-bg: #2A2A2A95;
    --contact-placeholder: #cccccc;
    --background-card: linear-gradient(180deg, #2f3636, #171e1e);
    --background-gradient: linear-gradient(180deg, #141717 0%, #1d1f20 100%);
    --timeline-gradient: linear-gradient(#FFB88C, #ff0062, #0048ff, #71B280);
    --background-static: #141717;

    /* Button Colors */
    --button-inactive: #006767;
    --button-hover: #de9e36;
    --button-active: #00c5c5;
    --button-contact: #FFB347;
    --button-contact-hover: #fcce8c;

    /* Timeline Event Colors */
    --1st-event: #FFAD89;
    --2nd-event: #FF677A;
    --3rd-event: #FF2C6C;
    --4th-event: #CC0E81;
    --5th-event: #7A26B4;
    --6th-event: #283DE6;
    --7th-event: #1A60E2;
    --8th-event: #3D81BA;

    /* Animated Gradient Colors */
    --color-bg1: rgb(108, 0, 162);
    --color-bg2: rgb(0, 17, 82);
    --color1: 18, 113, 255;
    --color2: 221, 74, 255;
    --color3: 100, 220, 255;
    --color4: 200, 50, 50;
    --color5: 180, 180, 50;
    --color-interactive: 140, 100, 255;
    --circle-size: 80%;
    --blending: hard-light;


    /* Text Colors */
    --text-color-lt: #eeeeee;
    --text-color-md: #cccccc;
    --text-color-mdDk: #5f5f5f;
    --text-color-dk: #242424;
    --text-color-soft: #8c8c8c;
    --copy-dkbg-color: #8d8d8d;

    /* Global Fonts */

    --font-centra: "Centra", sans-serif;
    --font-roboto: "Roboto", sans-serif;
    --font-poppins: "Poppins", sans-serif;

    /* Global Font Sizes */

    font-size: 62.5%;

    --text-xxs: 0.8rem;
    --text-xs: 1rem;
    --text-s: 1.2rem;
    --text-r: 1.6rem;
    --text-l: 1.8rem;
    --text-xl: 2.2rem;
    --text-xxl: 2.8rem;
    --text-xxxl: 3.2rem;
    --text-xxxxl: 4rem;
    --text-xxxxxl: 6rem;
    --text-xxxxxxl: 8rem;
    --text-xxxxxxxl: 10rem;

    /* Global Margins */

    --m-tablet: 0 3rem;
    --m-mobile: 0 2rem;

    /* Global Padding */

    --p-tablet: 0 2rem;
    --p-mobile: 0 .8rem;

    /* Animation Settings */

    --blurA: blur(20px);
    --blurB: blur(10px);
    --blurC: blur(10px);
    --blurD: blur(20px);
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 0;
    content: none;
  }

  html {
    scroll-behavior: smooth;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    scrollbar-width: none; /* Firefox */
    @media screen and (max-width: 400px) {
        font-size: 13px;
    }
  }

  html::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  body {
    -webkit-scrollbar: none; /* Chrome, Safari, and Opera */
    -ms-overflow-style: none;  /* IE and Edge */
    overflow: -moz-scrollbars-none; /* Firefox legacy */
    font-family: 'Centra', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    color: #fff;
    justify-content: center;
    background-color: var(--background-static);
    overflow-x: hidden;
    width: 100vw;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Centra', sans-serif;
    font-weight: 700;
    color: #fff;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.2;
  }

  p {
    font-size: 1.1em;
    line-height: 27px;
    color: #fff;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  #journey-container {
    margin: 5rem 0 15rem 0;
  }


  /* SECTION GRADIENTS */
  #about {
    border-bottom: 1px solid #de6262;
    background: #141717;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #333333 0%, #141717 50%);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #333333 0%, #141717 50%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 }

  #tech {
    border-bottom: 1px solid #141717;
    background: #de6262; /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #de6262 0%, #ffb88c 70%); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #de6262 0%, #ffb88c 70%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  #journey {
    border-bottom: 1px solid #71B280;
    background: #141717;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #333333 0%, #141717 50%);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #333333 0%, #141717 50%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  #projects {
    border-bottom: 1px solid #141717;
    background: #134E5E;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #71B280 0%, #134E5E 70%);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #71B280 0%, #134E5E 70%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  #contact {
    border-bottom: 1px solid #141717;
    background: #FFB347;
    background: -webkit-linear-gradient(to bottom, #FFB347 0%, #FF5E62 100%);
    background: linear-gradient(to bottom, #FFB347 0%, #FF5E62 100%);
  }
`


/* GLOBAL STYLED COMPONENTS */

export const Section = styled.section`
  position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
  overflow: hidden;
`

export const Container = styled.div`
  position: relative;
  max-width: 100rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20rem 0 25rem 0;
  @media only screen and (max-width: 999px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media only screen and (max-width: 480px) {
    margin: 10rem 0;
    padding: var(--p-mobile);
  }
`

export const BGWord = styled.span`
	position: absolute;
	top: calc(50% - 5rem);
	left: ${props => props.$left || '50%'};
	transform: translate(-50%, -50%);
  width: 100%;
  word-wrap: nowrap;
  text-align: center;
	font-size: clamp(4rem, 14vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dk);
  mix-blend-mode: screen;
	z-index: 0;
	@media screen and (max-width: 768px) {
    top: calc(50% - 5rem);
		left: 50%;
	}
`

export default GlobalStyles