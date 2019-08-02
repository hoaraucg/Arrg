import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal } from 'mdbreact';

class ModalPage extends Component {
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
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default ModalPage;