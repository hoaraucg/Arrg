import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal } from 'mdbreact';
import FormPage from "./login"

class LoginModal extends Component {
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
        <MDBBtn color="info" onClick={this.toggle}>Login</MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
          <FormPage />
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default LoginModal;