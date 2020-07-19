import styled from 'styled-components';

export const WrapperSplashScreen = styled.div `
    background-color:white;
    height:100vh;
    display:flex;
    justify-content:center;
`
export const Img = styled.img ` 
     width: 65%;
     object-fit:contain; 
     animation:  infinite 20s linear;
        @keyframes spin {
        0% {
        transform: rotateZ(0deg);
        }
        100% {
        transform: rotateZ(360deg);
        }
}
   
`