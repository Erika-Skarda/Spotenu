import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: "#F2B3E1";
  padding: 16px;
`;

export const WrapperIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: "#F2B3E1";
`;
export const DivIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
  color:"#D1B4D9";
  opacity: 60%;
  cursor: pointer;
`;