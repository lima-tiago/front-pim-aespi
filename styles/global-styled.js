import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }

  .container {
    width: 100%;
    max-width: 1250px;
    padding: 0 16px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .only-desktop {
    display: block;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .only-mobile {
    display: none;
    @media screen and (max-width: 800px) {
      display: block;
    }
  }

  h1 {
    font-size: 36px;
    text-align: center;
    margin: 16px 0;
  }

  .subtitle {
    color: rgba(0, 0, 0, 0.6);
    font-size: 20px;
    margin: 0 0 8px;
  }

`

export default GlobalStyle;