/* eslint-disable no-unused-vars */
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;

 }

body {
  font-family: "Manrope", sans-serif;
  color: #072635;

  transition: color 0.3s, background-color 0.3s;

  line-height: 1.5;
  font-size: 1.4rem;
  overflow: auto;
  
  scrollbar-color: #fff #f0f0f0; 
  scrollbar-width: thin; 
  &::-webkit-scrollbar {
    width: 10px; 
    height: 10px; 
    border-radius: 10px; 
    background-color: #f0f0f0; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff; 
    border-radius: 10px; 
  }
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
 
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  
}
`;
export default GlobalStyles;
