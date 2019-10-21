import { createGlobalStyle } from "styled-components"

const font = require("./assets/fonts/BebasNeueRegular.woff")
const fontAvenir = require("./assets/fonts/AvenirRoman.otf")

const GlobalStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');
  
  @font-face {
    font-family: "BebasNeueRegular";
    src: url(${font});
  }
  
  @font-face {
    font-family: "Avenir";
    src: url(${fontAvenir});
  }
 
  html, body {
    font-family: 'Avenir', sans-serif !important;
    height: 100%;
  }
    
  html {
    font-family: 'Avenir', sans-serif !important; 
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
    background: white;
  }
  
  main{
    position: relative;
  }
`

export default GlobalStyle