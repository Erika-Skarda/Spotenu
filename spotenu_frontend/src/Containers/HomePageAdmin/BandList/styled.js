import styled from 'styled-components';

export const ListPageWrapper = styled.div`
    align-items: center;
    min-height: min(378px,100%);
    max-height: 100%;
    display: flex;
    padding: 0 18px;
    flex-direction: column;

    > button {
        float: right;
        margin: 40px 20px; 
    }
    
        > h1 {
            padding-top: 60px;
            text-align: center;
            font-size: 1.3em
        } 
        > h2 {
 
        text-align: center;
      
        } 
    `

export const Img = styled.img`
  width: 32px;
  height: 32px;
  opacity: 90%;
  cursor: pointer;
  margin-left: 88%;
  margin-top: 22px;  
      
`;
export const Main = styled.main`
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
        }
        

        button {
            background: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            padding: 8px;

        }
    }
`;
export const Button = styled.button`
    width: 80%;
    height: 30px;
    border-radius: 1px;
    background-color: #AEDFF2; 
    font-size:16px;
    margin: 8px 16px;
    border-radius: 4px;
`;
export const Image = styled.img`
    margin-top: 20px;
    width: 200px;
    height: 100px;
    object-fit: contain;

`;