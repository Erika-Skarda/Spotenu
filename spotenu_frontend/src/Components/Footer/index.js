import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Containers/Router";
import { Container, DivIcon, Img, WrapperIcons } from "./styled";

class Footer extends Component {

  render() {
    const { goToHome, goToMyProfile, goToCompany } = this.props;

    return (
      <Container  style={{backgroundColor: "#F2B3E1" }}>
        <WrapperIcons>
          <DivIcon>
            <Img
              src={require("../../Assets/search.svg")}
              title="Lupa"
              alt="ícone para pesquisar algo"
             
              //onClick={goToCompany}
            />
          </DivIcon>
          <DivIcon>
            <Img
              src={require("../../Assets/home.svg")}
              title="Home"
              alt="ícone para ir para home"
              onClick={goToHome}
            />
          </DivIcon>
          <DivIcon>
            <Img
              src={require("../../Assets/user.svg")}
              title="Perfil"
              alt="ícone para ir para o perfil do usuário"
              //onClick={goToMyProfile}
            />
          </DivIcon>
        </WrapperIcons>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(push(routes.home)),
  goToMyProfile: () => dispatch(push(routes.profile)),
  goToCompany: () => dispatch(push(routes.company)),
});

export default connect(null, mapDispatchToProps)(Footer);
