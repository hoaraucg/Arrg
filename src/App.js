import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import DoubleNavigationPage from "./components/navbar/navbar";
import JumbotronPage from "./components/jumbotron/jumbotron";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <DoubleNavigationPage />
        <JumbotronPage />
      </MDBContainer>
    );
  }
}

export default App;
