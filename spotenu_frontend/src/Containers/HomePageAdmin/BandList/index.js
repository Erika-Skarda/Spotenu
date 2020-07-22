import React, { Component } from "react";
import { connect } from 'react-redux';
import { replace, push } from "connected-react-router";
import { routes } from "../../Router/index";
import { ListPageWrapper, Main, Button } from './styled';
// import Button from "@material-ui/core/Button";
import {  getAllBands,  getBandId, approveBand } from '../../../Actions/userPage';


class BandList extends Component{
  componentDidMount() {
    const token = localStorage.getItem('token')

    // if (token === null) {
    //   this.props.goToLogin();
    // }

    this.props.getAllBands();
  }

  handleBandId = (id) => {
    this.props.getBandId(id)
  
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.goToLogin();
  }

  render() {
    const isLogged = localStorage.getItem("token") !== null;

  return (
    <ListPageWrapper>
      
       {isLogged && <Button onClick={this.handleLogout}>Sair</Button>}

      <h1>Lista das bandas</h1>
    <Main>
        <ul>
            {this.props.allUsers && this.props.allUsers.map(band => {
              return (
                <li>
                    <strong> Nome: {band.name}</strong> 
                    <p>Descrição: {band.description_band} </p>
                    <p>Nickname: {band.nickname}</p>
                    <p>E-mail: {band.email}</p>
                    <Button onClick={() => this.props.approveBand(band.id)}>Aprovar</Button>
                </li>
              )
            })}
          </ul>
      
    </Main>

    </ListPageWrapper>
  );
 }
}

const mapStateToProps = state => ({
  bandId: state.user.bandId,
  userInfo: state.user.userInfo,
  allUsers: state.user.allUsers
});

const mapDispatchToProps = dispatch => {
  return {
    getAllBands: () => dispatch(getAllBands()),
    getBandId: (id) => dispatch(getBandId(id)),
    approveBand: (id) => dispatch(approveBand(id)),
    goToLogin: () => dispatch(replace(routes.login)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList)
