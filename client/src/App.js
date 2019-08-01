import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import DoubleNavigationPage from "./components/navbar/navbar";
import MinimalisticIntro from "./components/jumbotron/jumbotron";
import ProjectsPage from "./components/post/post";
import FooterPage from "./components/footer/footer";
import SideNavPage from "./components/sidenav/sidenav";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <SideNavPage/>
        <MinimalisticIntro />
        <ProjectsPage />
        <FooterPage />
      </MDBContainer>
    );
  }
}

export default App;
