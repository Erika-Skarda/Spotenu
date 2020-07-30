import React, { Component } from "react";
import { connect } from 'react-redux';
import { replace, push } from "connected-react-router";
import { routes } from "../../Router/index";
import { ListPageWrapper, Main, Button, Image, Img } from './styled';
// import Button from "@material-ui/core/Button";
import {  getAllBands,  setSelectedBand, approveBand } from '../../../Actions/userPage';


class BandList extends Component{
  componentDidMount() {
    const token = localStorage.getItem('token')

     if (token === null) {
       this.props.goToLogin();
     }

    this.props.getAllBands();
  }

  handleBand = (band) => {
    console.log(band)
    this.props.setSelectedBand(band);
    this.props.goToDetails();
  
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.goToLogin();
  }

  render() {
    const isLogged = localStorage.getItem("token") !== null;

  return (
    <ListPageWrapper> 

      {isLogged && <Img src={require("../../../Assets/log-out.svg")}
      alt="ícone de saída do app" onClick={this.handleLogout} />}

      <h1>Spotenu</h1>
      
      <Image src={require("../../../Assets/logo.png")}
      alt="logo da Spotenu" /> 
      
        <h2>Lista das bandas</h2>
      <Main>
          <ul>
              {this.props.allBands && this.props.allBands.map(band => {
                
                return (
                  <li>
                      <strong> Nome: {band.name}</strong> 
                      <p>Aprovada: {band.is_approved}</p>
                      <Button onClick={() => {this.handleBand(band)}}>Detalhes</Button>
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

  allBands: state.user.allBands

});

const mapDispatchToProps = dispatch => {
  return {
    getAllBands: () => dispatch(getAllBands()),
    setSelectedBand: (band) => dispatch(setSelectedBand(band)),
    goToDetails: (id) => dispatch(push(routes.band)),
    goToLogin: () => dispatch(replace(routes.login)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList)
