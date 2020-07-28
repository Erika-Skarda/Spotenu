import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import SplashScreen from "../../Containers/SplashScreen/index";
import LoginPage from "../../Containers/LoginPage/index";
import SignUpPage from "../../Containers/SignUpPage/index";
import PageError from "../../Containers/PageError/index";
import HomePageAdmin from "../../Containers/HomePageAdmin/index";
import BandList from "../../Containers/HomePageAdmin/BandList/index";
import GenreList from "../..//Containers/HomePageAdmin/GenreList/index";
import BandDetails from "../HomePageAdmin/BandDetails";
import CreateGenre from "../HomePageAdmin/CreateGenre"
import CreateAdmin from "../HomePageAdmin/CreateAdmin";
import HomePageBanda from "../HomePageBanda";

export const routes = {
  splashScreen: "/",
  login:"/login",
  signup:"/signup",
  home: "/home",
  bandlist: "/band",
  band:"/details",
  //genrelist: "/genre",
  genrecreate: "/creategenre",
  admincreate: "/createadmin"
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.splashScreen} component={SplashScreen} />
        <Route exact path = {routes.login} component = {LoginPage} />
        <Route exact path = {routes.signup} component = {SignUpPage} />
        <Route exact path={routes.home} component={HomePageAdmin} />
        <Route exact path={routes.bandlist} component={BandList} />
        <Route exact path={routes.band} component={BandDetails} />
        <Route exact path={routes.genrecreate} component={CreateGenre} />
        <Route exact path={routes.admincreate} component={CreateAdmin} />
        <Route exact path={routes.home} component={HomePageBanda} />
        <Route path={routes.error} component={PageError} /> 
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;