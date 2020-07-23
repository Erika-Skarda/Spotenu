import React, { Component } from "react";
import { connect } from 'react-redux';
import { replace, push, goBack } from "connected-react-router";
import { routes } from "../../Router/index";
import { ListPageWrapper, Main, Button } from './styled';
// import Button from "@material-ui/core/Button";
import {  getBandDetails, approveBand } from '../../../Actions/userPage';


class BandDetails extends Component{
  componentDidMount() {
    const token = localStorage.getItem('token')

     if (token === null) {
       this.props.goToLogin();
     }
     getBandDetails(this.props.bandId)
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.goToLogin();
  }

  render() {
    const isLogged = localStorage.getItem("token") !== null;
    const { userInfo } = this.props
  return (
    <ListPageWrapper>
      
       {isLogged && <Button onClick={this.handleLogout}>Sair</Button>}
       <Button onClick={() => this.props.goBack}>Lista das bandas</Button>
      <h1>Detalhes da Banda</h1>
    <Main>
        <div>
            <p><strong> Nome: </strong>{userInfo.name}</p>
            <p><strong>Descrição: </strong>{userInfo.description_band} </p>
            <p><strong>Nickname:</strong> {userInfo.nickname}</p>
            <p><strong>E-mail: </strong> {userInfo.email}</p> 
            <p><strong>Aprovada: </strong> {userInfo.is_approved}</p>
            <Button onClick={() => {this.props.approveBand(userInfo.id)}}>Aprovar</Button>
            
        </div>    
    </Main>

    </ListPageWrapper>
  );
 }
}

const mapStateToProps = state => ({
  bandId: state.user.bandId,
  userInfo: state.user.userInfo
 
});

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => dispatch(goBack()),
    goToLogin: () => dispatch(replace(routes.login)),
    getBandDetails: (id) => dispatch(getBandDetails(id)),
    approveBand: (id) => dispatch(approveBand(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandDetails)