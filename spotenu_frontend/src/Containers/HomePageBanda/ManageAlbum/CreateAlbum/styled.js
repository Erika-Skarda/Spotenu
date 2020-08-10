import styled from "styled-components";
import { TextField } from '@material-ui/core';

export const CreateGenreWrapper= styled.div` 
    display:flex;
    flex-direction: column;
    align-items:center;

        h1 {
            margin-top:45px;
            font-size: 1.3em
        }
`;
export const Image = styled.img`
    margin-top: 20px;
    width: 200px;
    height: 100px;
    object-fit: contain;
`;
export const DivTitle = styled.div`
    width: 360px;
    height: 42px;
    text-align:center;
    justify-items:center;
    margin-top:20px;
`;
export const Text = styled.text `
    width: 296px;
    height: 18px;
    font-size: 16px;
    padding-top: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align:center;
    justify-items:center;
    margin-top: 10px;
`;
export const FormCreateGenre = styled.form`
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
export const Button = styled.button `
    width: 328px;
    height: 42px;
    border-radius: 1px;
    background-color: #AEDFF2; 
    font-size:16px;
    margin: 8px 16px;
    border-radius: 4px;
`;