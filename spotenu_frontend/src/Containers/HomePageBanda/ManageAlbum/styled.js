import styled from "styled-components";
import { theme } from '../../../Style/theme'

export const AlbumContainer = styled.div`

    align-items: center;
    min-height: min(378px,100%);
    max-height: 100%;
    display: flex;
    padding: 0 18px;
    flex-direction: column;

    > h1 {
            padding-top: 60px;
            text-align: center;
            font-size: 1.3em
        } 
`;
export const AlbumWrapper = styled.main `

    padding-top: 25px;
    width:100%;

    

     ul {
        display: grid;
        grid-template-columns: repeat(2, 0.5fr);
        grid-gap: 10px;
        list-style-type: none;
        width: 92vw;

            > li {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background-image: linear-gradient(279deg, rgba(242,153,202,1) 4%, rgba(209,180,217,1) 30%, rgba(243,239,244,1) 59%, rgba(174,223,242,1) 90%);
                border-radius: 4px;
                padding: 10px;

                > p {
                margin: 5px 0;
                }

            button {
                margin-top: 15px;
            }
            >img {

                width:80%;

            }
        }
     }
`