import React, { Component } from "react";
import { connect } from 'react-redux';
import { replace, push, goBack } from "connected-react-router";
import { routes } from "../../Router/index";
import { ListPageWrapper, Main, Button, Img } from './styled';
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
    const { band } = this.props
    const { goBack } = this.props
  return (
    <ListPageWrapper>
      
      {isLogged && <Img src={require("../../../Assets/log-out.svg")}
      alt="ícone de saída do app" onClick={this.handleLogout} />}

       <Button onClick={goBack}>Lista das bandas</Button>
      <h1>Detalhes da Banda</h1>
    <Main>
        <div>
            <p><strong>Nome: </strong>{band.name}</p>
            <p><strong>Descrição: </strong>{band.description_band} </p>
            <p><strong>Nickname:</strong> {band.nickname}</p>
            <p><strong>E-mail: </strong> {band.email}</p> 
            <p><strong>Aprovada: </strong> {band.is_approved}</p>
            <Button onClick={() => {this.props.approveBand(band.id)}}>Aprovar</Button>
            
        </div>    
    </Main>

    </ListPageWrapper>
  );
 }
}

const mapStateToProps = state => ({
  band: state.user.band,
  userInfo: state.user.userInfo
 
});

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => dispatch(goBack()),
    goToLogin: () => dispatch(replace(routes.login)),
    getBandDetails: (id) => dispatch(getBandDetails(id)),
    approveBand: (bandId) => dispatch(approveBand(bandId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandDetails)