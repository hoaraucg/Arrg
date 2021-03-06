import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import FormPage from "../login/login"
import SignupPage from './signup';

class SignUpModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="info" onClick={this.toggle}>Sign Up</MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
          <SignupPage />
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default SignUpModal;