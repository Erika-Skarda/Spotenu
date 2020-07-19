import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const theme = {
  pink: "#F299CA",
  lightPink: "#F2B3E1",
  lilas: "#D1B4D9",
  lightBlue: "#AEDFF2",
  background: "white",
};

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin : 0;
    box-sizing: border-box;
    font-size: 16px;
  } 
  button {
    cursor: pointer;
  }
  body {
     background: ${theme.background};
     font-family:'proxima_nova_rgbold', Helvetica, Arial, sans-serif;
  };
`;

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;