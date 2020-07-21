import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Router";
import { Container, DivIcon, Img, WrapperIcons } from "./style";

class Footer extends Component {

  render() {
    const { goToHome, goToMyProfile, goToCompany } = this.props;

    return (
      <Container>
        <WrapperIcons>
          <DivIcon>
            <Img
              src={require("../../Assets/search.svg")}
              title="Lupa"
              alt="ícone para pesquisar algo"
              style={{ color: "very dark gray" }}
              onClick={goToCompany}
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
              onClick={goToMyProfile}
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
