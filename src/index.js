import React from "react";
import ReactDOM from "react-dom";

import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configureStore";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./utils/theme";

import MainLayout from "./pages/layouts/MainLayout";
import SearchComponent from "./pages/search/SearchComponent";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search" />} />
            <Route path="/search" component={SearchComponent} />
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
