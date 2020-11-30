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
    width: 360px;
    max-width: 100%;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 360px;
    max-width: 100%;
    .groupInput {
      position: relative;
      margin: 8px 0;
      label {
        position: absolute;
        top: 16px;
        left: 24px;
        z-index: 1;
        padding: 0 4px;
        transition: top 0.5s, font-size 0.5s;
      }
      input {
        background-color: #FFF;
        border: 1px solid #CCC;
        border-radius: 10px;
        padding: 16px 24px;
        width: 360px;
        max-width: 100%;
        transition: border 0.5s;
        &:focus {
          outline: none;
          border-color: #333;
          & ~ label {
            top: -6px;
            font-size: 12px;
            background-color: #FFF;
          }
        }
        &:valid {
          border-color: #0ab800;
          & ~ label {
            top: -6px;
            font-size: 12px;
            background-color: #FFF;
          }
        }
        &:invalid {
          border-color: #f00;
          & ~ label {
            top: -6px;
            font-size: 12px;
            background-color: #FFF;
          }
        }
      }
    }
  }

`

export default GlobalStyle;