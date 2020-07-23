import { push, GoBack, replace } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Containers/Router"
import Footer from "../../Components/Footer/index";
import ProfilePage from "../../Components/PorfilePage";
import BackButton from "../../Containers/GoBackButton/index";
import { Button } from "./styled"
import BandList from "./BandList";
import GenreList from "./GenreList";

class HomePageAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };
componentDidMount() {

    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem("userRole")

        if (token === null || userRole !== "admin") {

        this.props.goToLogin();

        }

}
  render() {
      const { goToBand } = this.props;

      return(
      <>
        <BackButton showButtonGoBack={true}/>
        <ProfilePage />
        <Button type="button" onClick={goToBand}>Bandas</Button>
        <Button type="button">Criar gêneros musicais</Button>
        <Button type="button">Cadastrar novo Admin</Button>
        <GenreList />
       
        <Footer />

      </>
      )
  }
};
const mapDispatchToProps = dispatch => {
    return {
        //goBack: () => dispatch(goBack()),
        goToLogin: () => dispatch(replace(routes.login)),
        goToBand: () => dispatch(push(routes.bandlist))
    
    }
}

export default connect(null, mapDispatchToProps)(HomePageAdmin)