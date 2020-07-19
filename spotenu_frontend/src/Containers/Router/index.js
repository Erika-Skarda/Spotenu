import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SplashScreen from "../../Containers/SplashScreen/index";
import LoginPage from "../../Containers/LoginPage/index";

export const routes = {
  splashScreen: "/",
  login:"/login"
  //home: "/home",
  
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.splashScreen} component={SplashScreen} />
        <Route exact path = {routes.login} component = {LoginPage} />
        {/* <Route exact path={routes.home} component={Home} />
        <Route path={routes.error} component={PageError} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;