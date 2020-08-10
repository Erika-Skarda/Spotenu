import React, { Component } from "react";
import { connect } from 'react-redux';
import { replace, push } from "connected-react-router";
import { routes } from "../../Router/index";

class ManageMusic extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
    
         if (token === null) {
           this.props.goToLogin();
         }
    
        this.props.getAllBands();

        render() {

            return()
        };

    }

    // const mapStateToProps = state => ({

    //     allBands: state.user.allBands
      
    //   });
      
    //   const mapDispatchToProps = dispatch => {
    //     return {
    //       getAllBands: () => dispatch(getAllBands()),
    //       setSelectedBand: (band) => dispatch(setSelectedBand(band)),
    //       goToDetails: (id) => dispatch(push(routes.band)),
    //       goToLogin: () => dispatch(replace(routes.login)),
    //     }
    //   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageMusic)