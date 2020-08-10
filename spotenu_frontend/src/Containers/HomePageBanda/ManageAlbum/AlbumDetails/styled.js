import styled from 'styled-components';
import { theme } from "../../../../Style/theme";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`


const Icon = styled.div`
    margin: 30px 0px;
    width: 150px;
    display: flex;
    justify-content: space-between;
`

export const ContainerAddSong = styled.div`
    margin: 0 auto;
    background: #363636;
    padding: 15px ;
    border-radius: 15px;
    margin-bottom: 10px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
`

export const Song = styled.div`
 background: ${theme.lilas};
 border-radius: 10px;
 padding: 10px 25px 10px 12px;
 margin: 5px;
 display: flex;
 justify-content: space-between;

  p {

      color:white;
  }
`
export const FormCreateMusic = styled.form`
margin-bottom:35px;
display:flex;
flex-direction:column;
text-align:center;
`;
