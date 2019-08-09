import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";
import SignupPage from "../auth/login";


  



class MinimalisticIntro extends Component {
  state = {
    collapsed: false,
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  // handleTogglerClick = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };

  render() {
    // const navStyle = { marginTop: "4rem" };
    // const overlay = (
    //   <div
    //     id="sidenav-overlay"
    //     style={{ backgroundColor: "transparent" }}
    //     onClick={this.handleTogglerClick}
    //   />
    // );
    return (
    <>
        <MDBView src={`http://images.unsplash.com/photo-1461994319301-06e2de6207c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9`}>
          <MDBMask className="d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 class="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold" id="arrg" >Arrg</h1>
                  <hr className="hr-light my-4" />
                  <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold">Batten down the hatches and<br></br>post your argument to declare a winner.</h5>
                 
                  <MDBBtn className="white btn-light-blue" size="lg" onClick={this.toggle}>Walk The Plank...</MDBBtn>
                  
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
          <MDBModalHeader toggle={this.toggle}>Login</MDBModalHeader>
          <MDBModalBody>
            <SignupPage />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
       
      </>
    );
  }
}

export default MinimalisticIntro;
