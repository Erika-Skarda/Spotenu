import { push, GoBack, replace } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../Router/index"
import Footer from "../../Components/Footer/index";
import ProfilePage from "../../Components/PorfilePage";
import BackButton from "../../Containers/GoBackButton/index";
import { Button } from "./styled"

class HomePageAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };
    // componentDidMount() {

    //    const token = localStorage.getItem('token');
    //    const userRole = localStorage.getItem("userRole")
    
    //     if (token === null || userRole !== "admin") {
    //        this.props.goToLogin();
    //      }

    //   }
  render() {
      return(
      <>
        <BackButton showButtonGoBack={true}  header={"Oi"}/>
        <ProfilePage />
        <Button type="button">Bandas</Button>
        <Footer />

      </>
      )
  }
};
const mapDispatchToProps = dispatch => {
    return {
        //goBack: () => dispatch(goBack()),
        goToLogin: () => dispatch(replace(routes.login)),
    
    }
}

export default connect(null, mapDispatchToProps)(HomePageAdmin)