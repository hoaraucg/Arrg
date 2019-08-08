import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import MinimalisticIntro from "./components/jumbotron/index";
import FooterPage from "./components/footer/footer";
import SideNavPage from "./components/Sidenav/index";
import SignupPage from "./components/auth/login"
import RegisterPage from "./components/auth/register";
import Vote from "./pages/Vote";
import Create from "./pages/Create"
import NavbarPage from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MinimalisticIntro} />
<<<<<<< HEAD
            <Route exact path="/getstarted" render={props => <div><SignupPage /><SideNavPage /><FooterPage /></div>} />
            <Route exact path="/login" component={SignupPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/home" render={props => <div><SideNavPage /><FooterPage /></div>} />
            <Route exact path="/vote" component={Vote} />
            <Route exact path="/create" component={Create} />
=======
            <Route exact path="/getstarted" render={props => <div><SignupPage /><NavbarPage /><FooterPage /></div>} />
            <Route exact path="/login" render={props => <div><FormPage /><NavbarPage /><FooterPage /></div>} />
            <Route exact path="/register" render={props => <div><RegisterPage /><NavbarPage /><FooterPage /></div>} />
            <Route exact path="/home" render={props => <div><NavbarPage /><FooterPage /></div>} />
            <Route exact path="/vote" render={props => <div><NavbarPage /><Vote /><FooterPage /></div>} />
            <Route exact path="/create" render={props => <div><NavbarPage /><Create /><FooterPage /></div>} />
>>>>>>> cd65a82eea64e3177cad3b46f5437feeb141cdc6
            {/* <Route exact path="/vote" render={props => <div><ProjectsPage /><SideNavPage /><FooterPage /></div>} /> */}
            {/* <Route component={NoMatch}/> */}
          </Switch>
        </div>

      </Router>

    );
  }
}

export default App;