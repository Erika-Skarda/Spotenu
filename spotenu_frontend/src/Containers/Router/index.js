import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import SplashScreen from "../../Containers/SplashScreen/index";
import LoginPage from "../../Containers/LoginPage/index";
import SignUpPage from "../../Containers/SignUpPage/index";
import PageError from "../../Containers/PageError/index";
//Admin
import HomePageAdmin from "../../Containers/HomePageAdmin/index";
import BandList from "../../Containers/HomePageAdmin/BandList/index";
import GenreList from "../../Containers/HomePageAdmin/GenreList/index";
import BandDetails from "../HomePageAdmin/BandDetails";
import CreateGenre from "../HomePageAdmin/CreateGenre"
import CreateAdmin from "../HomePageAdmin/CreateAdmin";
//Banda
import HomePageBanda from "../HomePageBanda";
import ManageAlbum from '../HomePageBanda/ManageAlbum/index';
import AlbumDetails from '../HomePageBanda/ManageAlbum/AlbumDetails';
import CreateAlbum from "../HomePageBanda/ManageAlbum/CreateAlbum/index";
import CreateMusic from "../HomePageBanda/ManageMusic/CreateMusic"

import HomePageFree from "../HomePageFree";
import HomePagePremium from "../HomePagePremium";

export const routes = {
  splashScreen: "/",
  login:"/login",
  signup:"/signup",

  //Admin
  home: "/home",
  bandlist: "/band",
  band:"/details",
  //genrelist: "/genre",
  genrecreate: "/creategenre",
  admincreate: "/createadmin",

  //Banda
  homeband: "/homebanda",
  managealbum:"/albummanage",
  albumdetails: "/albumdetails",
  albumcreate: "/createalbum",
  musiccreate:"/createmusic",

  //Ouvinte pagante
  homepremium:"/homepremium",

  //Ouvinte não pagante
  homefree:"/homefree"


};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.splashScreen} component={SplashScreen} />
        <Route exact path = {routes.login} component = {LoginPage} />
        <Route exact path = {routes.signup} component = {SignUpPage} />
          {/* Admin */}
        <Route exact path={routes.home} component={HomePageAdmin} />
        <Route exact path={routes.bandlist} component={BandList} />
        <Route exact path={routes.band} component={BandDetails} />
        <Route exact path={routes.genrecreate} component={CreateGenre} />
        <Route exact path={routes.admincreate} component={CreateAdmin} />
         {/* Banda */}
        <Route exact path={routes.homeband} component={HomePageBanda} />
        <Route exact path={routes.managealbum} component={ManageAlbum} />
        <Route exact path={routes.albumdetails} component={AlbumDetails} />
        <Route exact path={routes.albumcreate} component={CreateAlbum} />
        <Route exact path={routes.musiccreate} component={CreateMusic} />

        <Route exact path={routes.homepremium} component={HomePagePremium} />

        <Route exact path={routes.homefree} component={HomePageFree} />
        <Route path={routes.error} component={PageError} /> 
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;