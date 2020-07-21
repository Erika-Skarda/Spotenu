import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import SplashScreen from "../../Containers/SplashScreen/index";
import LoginPage from "../../Containers/LoginPage/index";
import SignUpPage from "../../Containers/SignUpPage/index";
import PageError from "../../Containers/PageError/index";
import HomePageAdmin from "../../Containers/HomePageAdmin";


export const routes = {
  splashScreen: "/",
  login:"/login",
  signup:"/signup",
  home: "/home",
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.splashScreen} component={SplashScreen} />
        <Route exact path = {routes.login} component = {LoginPage} />
        <Route exact path = {routes.signup} component = {SignUpPage} />
        <Route exact path={routes.home} component={HomePageAdmin} />
        <Route path={routes.error} component={PageError} /> 
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;