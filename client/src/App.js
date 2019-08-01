import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import DoubleNavigationPage from "./components/Navbar/navbar";
import MinimalisticIntro from "./components/Jumbotron";
import ProjectsPage from "./components/Post";
import FooterPage from "./components/Footer/footer";
import SideNavPage from "./components/Sidenav/sidenav";
import FormPage from "./components/Login/login";
import ModalPage from "./components/Modal/modal"
import SignupPage from "./components/Signup/signup"
import SignUpModal from "./components/Signup/signupmodal";
import LoginModal from "./components/Login/modal";
import RegisterPage from "./components/Registration/register";

class App extends Component {
  render (){
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path ="/" component={MinimalisticIntro} /> 
      <Route exact path ="/home" component={ProjectsPage} /> 
      <Route exact path="/vote" component={SideNavPage}/>
      <Route component={NoMatch}/>
      <Books />
      </Switch>
    </div>

    </Router>
    
  );
}}

export default App;