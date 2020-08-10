import React , { Component }from "react";
import {
        Container,
        Banner,
        StyledAvatar
  } from './styled';
import { connect } from 'react-redux';
import { replace, push, goBack } from "connected-react-router";
import { routes } from "../../Containers/Router";
import { getProfile } from "../../Actions/userPage";
import { changePhotoAction } from "../../Actions/photo";
import { color } from "../../../src/Assets/logo_c.jpg";
import { perfil } from "../../Assets/perfil.svg";

 class ProfilePage extends Component {
   constructor(props){
     super(props)
     this.state = {
     

      }
    }


  componentDidMount = () => {

    const token = window.localStorage.getItem('token')

    if(token === null || !token) {
      this.props.goToLogin()
  
    } 
    
    this.props.getProfile()
  }
   

   render() {
  
      const { user, photo } = this.props
     

  return (
    <Container>
      <Banner style={{backgroundColor: "#F2B3E1"}}>
     
         <StyledAvatar src={user.photo} /> 
          <p>{user && user.name} </p>
      </Banner>     
    </Container>
  );
}
};
const mapStateToProps = state => ({
  
  user: state.user.profile,
  photo: state.photo.userPhoto  

})


const mapDispatchToProps = dispatch => ({

  changePhotoAction: photo => dispatch(changePhotoAction(photo)),
  goToLogin: () => dispatch(replace(routes.login)),
  getProfile:() => dispatch(getProfile()),

})
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);