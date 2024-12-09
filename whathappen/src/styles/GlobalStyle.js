import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}  
  @font-face {
    font-family: 'Gmarket Sans';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansLight.woff2') format('woff2'), 
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansLight.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansLight.otf') format('opentype'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansLight.ttf') format('truetype');
}
@font-face {
    font-family: 'Gmarket Sans';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansMedium.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansMedium.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansMedium.otf') format('opentype'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansMedium.ttf') format('truetype');
}
@font-face {
    font-family: 'Gmarket Sans';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansBold.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansBold.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansBold.otf') format('opentype'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GmarketSans/GmarketSansBold.ttf') format('truetype');
}

  html {
    font-size: 10px;
  }

  body{
    font-family: 'Gmarket Sans';
  }

  * {
    box-sizing: border-box;
  }
 
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    white-space: nowrap;
  }

  :root {
  --main-color: #2E5DFF;
  }
`;

export default GlobalStyle;
