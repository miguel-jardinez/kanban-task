'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    font-size:62.5%;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  button {
    border: 0;
    padding: 0;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }
`;