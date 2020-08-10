import { push, GoBack, replace } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Containers/Router"

import Footer from "../../Components/Footer/index";
import ProfilePage from "../../Components/PorfilePage";
import BackButton from "../../Containers/GoBackButton/index";

import { Div,
         WrapperButton 
                        } from "./styled"
import { Button } from '../../Style/theme';

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
      const { goToManageAlbum } = this.props;
      
      return(
      <Div>
        <BackButton showButtonGoBack={true}/>
        <ProfilePage />
        <Footer />

        <WrapperButton>
            
            <Button type="button" onClick = { goToManageAlbum }>Gerenciar seus álbuns</Button>  
            {/* <Button type="button" onClick = { goToCreateMusic }>Gerencie suas músicas</Button>  */}
        
        </WrapperButton>

      </Div>
      )
  }
};

const mapDispatchToProps = dispatch => {
    return {
        //goBack: () => dispatch(goBack()),
        goToLogin: () => dispatch(replace(routes.login)),
        goToManageAlbum: () => dispatch(push(routes.managealbum)),
        // goToManageMusic: () => dispatch(push(routes.musiccreate))
    
    }
}

export default connect(null, mapDispatchToProps)(HomePageBand)