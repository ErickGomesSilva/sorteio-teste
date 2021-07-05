import { createGlobalStyle } from "styled-components";
import background_image from "./assets/images/backgroundInstaSorteio.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background-image: url(${background_image});
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    background-attachment: fixed;
  }

  html, body, #root {
    height: 100%;
  }
`;


