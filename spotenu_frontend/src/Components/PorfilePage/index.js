import React, { Component } from "react";
import {
        Container,
        Banner,
        StyledAvatar
  } from './styled';

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };
    render() {
  return (
    <Container>
    
      <Banner style={{backgroundColor:"#D1B4D9"}}>
        <StyledAvatar src={require("../../Assets/perfil.svg")} ></StyledAvatar>
      </Banner>     
    </Container>
  );
}
};

export default ProfilePage;