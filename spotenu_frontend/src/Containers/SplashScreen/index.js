import React, { Fragment } from "react";
import { connect } from"react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { WrapperSplashScreen, Img } from "./styled";

 
class SplashScreen extends React.Component {
   
    componentDidMount() {

      window.setTimeout(this.props.goToLogin, 3000);
    }
  
    render() {
        return (
        <Fragment>
        
                <WrapperSplashScreen>
                    <Img src={require("../../Assets/logo.png")}
                        alt="logo da Spotenu" 
                    />
                </WrapperSplashScreen>
    
        </Fragment>
        )
    }

};
const mapDispatchToProps = dispatch => ({
   
     goToLogin: () => dispatch(push(routes.login)),
   
})

export default connect(null, mapDispatchToProps)(SplashScreen)