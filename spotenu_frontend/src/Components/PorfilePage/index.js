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
   
  //   handlePhotoChange = event => {
  
    //    this.props.changePhotoAction(event.target.value);
    
    //  };
      // const change = () => {
    
      //   const { user, photo } = this.props;
    
      //   switch(user.name) {
    
      //     case "Erika":
      //       <StyledAvatar src={require("../../Assets/user.svg")} ></StyledAvatar>
      //       break;
      //     default:
      //       <StyledAvatar src={require("../../Assets/perfil.svg")} ></StyledAvatar>
    
      //   }
      // }
   render() {
  
      const { user, photo } = this.props
      console.log(user)

  return (
    <Container>
      <Banner style={{backgroundColor: "#F2B3E1"}}>
      <p>{user && user.name} </p>
         <StyledAvatar src={require("../../Assets/perfil.svg")} >
           </StyledAvatar> 
        {/* {this.change()} */}
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