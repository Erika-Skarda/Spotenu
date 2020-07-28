import React from "react";
import {
        Container,
        Banner,
        StyledAvatar
  } from './styled';
import { connect } from 'react-redux';
import { replace, push, goBack } from "connected-react-router";
import { routes } from "../../Containers/Router";
import { getProfile } from "../../Actions/userPage";

class ProfilePage extends React.Component {
  
    componentDidMount = () => {

      const token = window.localStorage.getItem('token')
 
      if(token === null || !token) {
        this.props.goToLogin()
   
      } 
      
      this.props.getProfile()
   }
    render() {
      
      const { user } = this.props
      console.log(user)
  return (
    <Container>
      <Banner style={{backgroundColor: "#F2B3E1"}}>
      <p>{user && user.name} </p>
        <StyledAvatar src={require("../../Assets/perfil.svg")} ></StyledAvatar>
      </Banner>     
    </Container>
  );
}
};
const mapStateToProps = state => ({
  
  user: state.user.profile             
})


const mapDispatchToProps = dispatch => ({

  goToLogin: () => dispatch(replace(routes.login)),
  getProfile:() => dispatch(getProfile()),

})
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);