import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Router";
import Footer from "../../Components/Footer/index";

class HomePageAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };
  render() {
      <>
      <Footer />
      </>
  }


}
export default connect(null, null)(HomePageAdmin)