import React, {Component, Fragment} from "react"
import { connect } from"react-redux"
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { WrapperSplashScreen, Img } from "./styled";

 
class SplashScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      window.setTimeout(this.props.goToLogin, 100);
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