import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Profile from "./pages/Profile"
import MinimalisticIntro from "./components/jumbotron/index";
import FooterPage from "./components/Footer/index";
import SignupPage from "./components/auth/login"
import RegisterPage from "./components/auth/register";
import Vote from "./pages/Vote";
import Create from "./pages/Create"
import NavbarPage from "./components/Navbar/index";
import Register from "./components/auth/register"

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={MinimalisticIntro} />
              <Route exact path="/getstarted" render={props => <div><SignupPage /><NavbarPage /><FooterPage /></div>} />
              <Route exact path="/login" render={props => <div><NavbarPage /><SignupPage /><FooterPage /></div>} />
              <Route exact path="/register" render={props => <div><NavbarPage /><RegisterPage /><FooterPage /></div>} />
              <Route exact path="/home" render={props => <div><NavbarPage /><Register /><FooterPage /></div>} />
              <Route exact path="/vote" render={props => <div><NavbarPage /><Vote /><FooterPage /></div>} />
              <Route exact path="/create" render={props => <div><NavbarPage /><Create /><FooterPage /></div>} />
              <Route exact path="/profile" render={propr => <div><NavbarPage /><Profile /><FooterPage /></div>} />
              {/* <Route exact path="/vote" render={props => <div><ProjectsPage /><SideNavPage /><FooterPage /></div>} /> */}
              {/* <Route component={NoMatch}/> */}
              <PrivateRoute exact path="/vote" component={Vote} />
            </Switch>
          </div>

        </Router>
      </Provider>
    );
  }
}

export default App;