import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    font-family: 'Inter', sans-serif;
    --Gray-0: #F8F9FA;
    --Gray-1: #868E96;
    --Gray-2: #343B41;
    --Gray-3: #212529;
    --Gray-4: #121214;
    --Success: #3FE864;
    --Negative: #E83F5B;
    --Color-primary: #FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;
    
  }

  #root {
    width: 100vw;
  }

  body {
    background-color: var(--gray-4);
    color: var(--gray-0);
  }

  h1 {
    color: var(--Color-primary);
  }

  body, input, button {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }



  .errors{
    color: var(--Negative)
  }

`

export default GlobalStyle;