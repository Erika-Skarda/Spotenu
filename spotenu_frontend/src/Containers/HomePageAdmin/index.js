import { push, GoBack, replace } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Containers/Router"
import Footer from "../../Components/Footer/index";
import ProfilePage from "../../Components/PorfilePage";
import BackButton from "../../Containers/GoBackButton/index";
import { Button, Div, WrapperButton } from "./styled"
import BandList from "./BandList";
import GenreList from "./GenreList";
import "./home.scss";
//import menu from "./home"

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
      const { goToBand, goToCreateGenre, goToCreateAdmin } = this.props;
      
      return(
      <Div>
        <BackButton showButtonGoBack={true}/>
        <ProfilePage />
        {/* <script src="home.js"></script>
        <nav class="top-right open">
            <a class="disc l1">
                <div>Bandas</div>
            </a>
            <a class="disc l2">
                <div>Criar gêneros </div>
            </a>
            <a class="disc l3">
                <div>novo Admin</div>
            </a>
            <a class="disc l4">
                <div>Gêneros</div>
            </a>
            <a class="disc l5 toggle">
                Menu
            </a>
        </nav> */}
        <WrapperButton>
            <Button type="button" onClick = { goToBand }>Bandas</Button>
            <Button type="button" onClick = { goToCreateGenre }>Criar gêneros musicais</Button>
            <Button type="button" onClick = { goToCreateAdmin }>Cadastrar novo Admin</Button> 
        </WrapperButton>
         {/* <GenreList />   */}
        <Footer />

      </Div>
      )
  }
};
const mapDispatchToProps = dispatch => {
    return {
        //goBack: () => dispatch(goBack()),
        goToLogin: () => dispatch(replace(routes.login)),
        goToBand: () => dispatch(push(routes.bandlist)),
        goToCreateGenre: () => dispatch(push(routes.genrecreate)),
        goToCreateAdmin: () => dispatch(push(routes.admincreate))
    
    }
}

export default connect(null, mapDispatchToProps)(HomePageAdmin)