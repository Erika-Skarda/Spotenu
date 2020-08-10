import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { TextField } from '@material-ui/core';

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
export const Div = styled.div`
      
    background-repeat:no-repeat; 
    background-size: cover;
    height: 100%;
    
`;
//Container dos botões
export const WrapperButton = styled.div `
    margin-top: 60%;
    display: grid;
`;

export const Button = styled.button`
    width: 328px;
    height: 42px;
    border-radius: 1px;
    background-color: #AEDFF2; 
    font-size:16px;
    margin: 8px auto;
    border-radius: 4px;
`;
//LOGO DE SAIR DO APP
export const Img = styled.img`
  width: 32px;
  height: 32px;
  opacity: 90%;
  cursor: pointer;
  margin-left: 88%;
  margin-top: 22px;  
      
`;
//LOGO SPOTENU
export const Image = styled.img`
    margin-top: 20px;
    width: 200px;
    height: 100px;
    object-fit: contain;

`;
//FORMS
export const Form = styled.form`
    margin-bottom:35px;
    display:flex;
    flex-direction:column;
    text-align:center;
`;

export const TextFieldStyled = styled(TextField) `
    width: 328px;
    height: 56px;
    border-radius: 2px;
    padding: 0 auto;
`;