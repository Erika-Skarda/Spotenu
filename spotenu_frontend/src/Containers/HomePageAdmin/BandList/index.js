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

     if (token === null) {
       this.props.goToLogin();
     }

    this.props.getAllBands();
  }

  handleBandId = (id) => {
    this.props.getBandId(id);
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
      
       {isLogged && <Button onClick={this.handleLogout}>Sair</Button>}

        <h1>Lista das bandas</h1>
      <Main>
          <ul>
              {this.props.allBands && this.props.allBands.map(band => {
                
                return (
                  <li>
                      <strong> Nome: {band.name}</strong> 
                      <p>Aprovada: {band.is_approved}</p>
                      <Button onClick={() => {this.handleBandId(band.id)}}>Detalhes</Button>
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
    getBandId: (id) => dispatch(getBandId(id)),
    goToDetails: (id) => dispatch(push(routes.band)),
    goToLogin: () => dispatch(replace(routes.login)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList)
