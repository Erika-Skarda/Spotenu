import styled from "styled-components";
import img from "../../Assets/fonedeouvido.jpg";
import img2 from "../../Assets/musica-.jpg";

export const Div = styled.div`
       
    background-image: url(${img2});
    background-repeat:no-repeat; 
    background-size: cover;
    height: 100%;
    
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
export const WrapperButton = styled.div `
    margin-top: 60%;
    display: grid;
`;

