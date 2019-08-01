import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import MinimalisticIntro from "./components/jumbotron/jumbotron";
import ProjectsPage from "./components/post/post";
import FooterPage from "./components/footer/footer";
import SideNavPage from "./components/sidenav/sidenav";
import SignUpModal from "./components/signup/signupmodal";
import LoginModal from "./components/login/modal";
import RegisterPage from "./components/registration/register";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <SideNavPage/>
        <MinimalisticIntro />
        <ProjectsPage />
        <SignUpModal /><LoginModal />
        <RegisterPage />
        <FooterPage />
      </MDBContainer>
    );
  }
}

export default App;
