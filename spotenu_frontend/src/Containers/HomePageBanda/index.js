import { push, GoBack, replace } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Containers/Router"
import Footer from "../../Components/Footer/index";
import ProfilePage from "../../Components/PorfilePage";
import BackButton from "../../Containers/GoBackButton/index";
import { Div } from "./styled"

class HomePageBand extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };
componentDidMount() {

    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem("userRole")

        if (token === null || !token || userRole !== "banda") {

             this.props.goToLogin();

        }

}
  render() {
      const { } = this.props;
      
      return(
      <Div>
        <BackButton showButtonGoBack={true}/>
        <ProfilePage />
        <Footer />

      </Div>
      )
  }
};

const mapDispatchToProps = dispatch => {
    return {
        //goBack: () => dispatch(goBack()),
        goToLogin: () => dispatch(replace(routes.login)),

    
    }
};

export default connect(null, mapDispatchToProps)(HomePageBand)