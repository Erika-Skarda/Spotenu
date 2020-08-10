import styled, { css } from 'styled-components';
import { theme } from '../../Style/theme';

  
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none; 
  
    ::-webkit-scrollbar {
      display: none;
    }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background-color: "#D1B4D9";
  position: relative;
  opacity:85%;

`;

export const StyledAvatar = styled.img`
   width: max(50px, min(135px, 22vw));
   height: max(50px, min(135px, 22vw)); 

  border: 3.75px solid ${theme.background};
  border-radius: 50%;
  position: absolute;
  bottom: max(-1px, -10vw);
  left: 15px;
  opacity: 1;

`;