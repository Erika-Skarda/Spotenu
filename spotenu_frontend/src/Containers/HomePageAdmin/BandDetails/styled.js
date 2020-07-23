import styled from 'styled-components';

export const ListPageWrapper = styled.div`
    min-height: 90vh;
    max-height: 100%;
    background: #fff ;
    color: black;
    padding: 0 18px;

     > button {
        float: right;
        margin: 40px 20px; 
    }

    Header {
        position: absolute;
      
    }

    > h1 {
        padding-top: 120px;
        text-align: center;
    } 
`

export const Main = styled.main`
    padding-top: 25px;
    

     ul {
        display: grid;
        grid-template-columns: repeat(2, 0.5fr);
        grid-gap: 10px;
        list-style-type: none;

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
    width: 328px;
    height: 42px;
    border-radius: 1px;
    background-color: #AEDFF2; 
    font-size:16px;
    margin: 8px 16px;
    border-radius: 4px;
`;