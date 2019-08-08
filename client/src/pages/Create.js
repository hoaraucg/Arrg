// import React from "react";
import React, { Component, Fragment } from "react";
import { MDBInput, MDBRow, MDBCol, MDBContainer, MDBView, MDBMask, MDBSelect, MDBBtn, MDBIcon, MDBJumbotron, MDBFormInline } from "mdbreact";
import SideNavPage from "../components/Sidenav";
import FooterPage from "../components/Footer";


class Create extends Component {

    state = {
        timeOptions: [
          {
            text: "First to 10 Votes",
            value: "1"
          },
          {
            text: "We'll Wait 24 Hours",
            value: "2"
          }
        ],
        radio: 6
      };

      onClick = nr => () =>{
        this.setState({
          radio: nr
        });
      }
      
    
render() {
return (
    <MDBContainer>

        <MDBJumbotron fluid className="mt-4">
      <MDBContainer>
        <h2 className="display-4">Ahoy!</h2>
        <p className="lead">Create yer argument and post to declare a winner.</p>
      </MDBContainer>
    </MDBJumbotron>
        <MDBRow className="d-flex justify-content-center">
        <MDBCol size="md-12">
        
        <MDBCol size ="md-12"> <MDBFormInline>
      <MDBInput onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label="Relationship"
        type="radio" id="radio1" />
      <MDBInput onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label="Friendship"
        type="radio" id="radio2" />
      <MDBInput onClick={this.onClick(3)} checked={this.state.radio===3 ? true : false} label="Family"
        type="radio" id="radio3" />
        <MDBInput onClick={this.onClick(4)} checked={this.state.radio===4 ? true : false} label="Workplace"
        type="radio" id="radio4" />
         <MDBInput onClick={this.onClick(5)} checked={this.state.radio===5 ? true : false} label="Politics"
        type="radio" id="radio5" />
        <MDBInput onClick={this.onClick(6)} checked={this.state.radio===6 ? true : false} label="Other"
        type="radio" id="radio6" />
    </MDBFormInline></MDBCol>

        <MDBCol size = "md-12"><MDBInput label="Argument Title" outline /></MDBCol>
        <MDBCol size = "md-12"><MDBInput type="textarea" label="Main Argument" outline /></MDBCol>
        <MDBRow className="d-flex justify-content-center">
        <MDBCol size="md-5"><MDBInput type="textarea" label="Side One" outline /></MDBCol>
        <MDBCol size="md-5"><MDBInput type="textarea" label="Side Two" outline /></MDBCol>
        </MDBRow>
        
        <MDBRow className="d-flex justify-content-center">
        <MDBCol size = "md-10">
        <MDBSelect outline
          options={this.state.timeOptions}
          selected="Choose your option"
          label="Result Time"
        />
        </MDBCol>
        </MDBRow>
      <MDBRow className="d-flex justify-content-center" >
      <Fragment>
      <MDBBtn color="danger">
        <MDBIcon icon="skull-crossbones" className="mr-1" /> Sail!
      </MDBBtn>
    </Fragment>
    </MDBRow>
      
        </MDBCol>
        </MDBRow>
    </MDBContainer>
    )};
}
  

    
  
  export default Create;