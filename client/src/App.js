import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import DoubleNavigationPage from "./components/navbar/navbar";
import MinimalisticIntro from "./components/jumbotron/index";
import ProjectsPage from "./components/Post";
import FooterPage from "./components/footer/footer";
import SideNavPage from "./components/Sidenav/index";
import FormPage from "./components/login/login";
import ModalPage from "./components/modal/modal"
import SignupPage from "./components/signup/signup"
import SignUpModal from "./components/signup/signupmodal";
import LoginModal from "./components/login/modal";
import RegisterPage from "./components/registration/register";
import Vote from "./pages/Vote";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MinimalisticIntro} />
            <Route exact path="/getstarted" render={props => <div><SignupPage /><SideNavPage /><FooterPage /></div>} />
            <Route exact path="/login" render={props => <div><FormPage /><SideNavPage /><FooterPage /></div>} />
            <Route exact path="/register" render={props => <div><RegisterPage /><SideNavPage /><FooterPage /></div>} />
            <Route exact path="/home" render={props => <div><ProjectsPage /><SideNavPage /><FooterPage /></div>} />
            <Route exact path="/vote" component={Vote} />
            {/* <Route exact path="/vote" render={props => <div><ProjectsPage /><SideNavPage /><FooterPage /></div>} /> */}
            {/* <Route component={NoMatch}/> */}
          </Switch>
        </div>

      </Router>

    );
  }
}

export default App;