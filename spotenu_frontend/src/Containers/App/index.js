import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  // MuiThemeProvider,
  //createGenerateClassName,
  //jssPreset,
  CssBaseline
} from "@material-ui/core";
////import JssProvider from "react-jss/lib/JssProvider";
//import { create } from "jss";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../Reducers";
import { routerMiddleware } from "connected-react-router";
import { theme, GlobalStyle, AppWrapper } from "../../Style/theme";
import { ThemeProvider } from "styled-components";

// const generateClassName = createGenerateClassName();
// const jss = create({
//   ...jssPreset(),
//   // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
//   insertionPoint: document.getElementById("jss-insertion-point")
// });

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

const App = () => (

  <Provider store={store}>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <AppWrapper>
          <Router history={history} />
        </AppWrapper>
      </ThemeProvider>
   
  </Provider>
);

export default App;