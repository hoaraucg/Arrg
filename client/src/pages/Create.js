// import React from "react";
import React, { Component, Fragment } from "react";
import { MDBInput, MDBRow, MDBCol, MDBContainer, MDBPopoverHeader, MDBPopoverBody, MDBSelect, MDBBtn, MDBIcon, MDBJumbotron, MDBFormInline, MDBPopover } from "mdbreact";
import API from "../utils/Api";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Z_FIXED } from "zlib";

class Create extends Component {

  state = {
    type: [],
    title: "",
    main: "",
    sideone: "",
    sidetwo: "",
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


  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const { user } = this.props.auth;
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      title: "",
      main: "",
      sideone: "",
      sidetwo: "",
    });

    var data = {
      type: [],
      title: this.state.title,
      main: this.state.main,
      sideone: this.state.sideone,
      sidetwo: this.state.sidetwo,
      date: new Date(Date.now()),
      user: user.name
    }


    API.saveArgument(data)
      .then(res => {
        //Alert the user their argument is posted
        console.log("argument added");
      })
      .catch(err => console.log("this should be the error " + err));




  };



  //  showArgument = () => {
  //    API.findAll()
  //    .then(res => {
  //      alert("The argument has been stored " + res)
  //     })
  //     .catch(err => console.log("This should be the error " + err));
  //   }

  // componentDidMount(){
  //   this.showArgument()
  // }



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

            <MDBCol size="md-12"> <MDBFormInline>
              <MDBInput onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false}
                value={this.state.type}
                name="type"
                onChange={this.handleInputChange}
                label="Relationship"
                type="radio"
                id="radio1" />
              <MDBInput onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="Friendship"
                type="radio" id="radio2" />
              <MDBInput onClick={this.onClick(3)} checked={this.state.radio === 3 ? true : false} label="Family"
                type="radio" id="radio3" />
              <MDBInput onClick={this.onClick(4)} checked={this.state.radio === 4 ? true : false} label="Workplace"
                type="radio" id="radio4" />
              <MDBInput onClick={this.onClick(5)} checked={this.state.radio === 5 ? true : false} label="Politics"
                type="radio" id="radio5" />
              <MDBInput onClick={this.onClick(6)} checked={this.state.radio === 6 ? true : false} label="Other"
                type="radio" id="radio6" />
            </MDBFormInline></MDBCol>




            <MDBCol size="md-12">
              <MDBInput
                value={this.state.title}
                name="title"
                onChange={this.handleInputChange}
                type="text"
                label="Argument Title"
                outline />
            </MDBCol>

            <MDBCol size="md-12">
              <MDBInput
                value={this.state.main}
                name="main"
                onChange={this.handleInputChange}
                type="text"
                label="Main Argument"
                outline />
            </MDBCol>

            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="md-5">
                <MDBInput
                  value={this.state.sideone}
                  name="sideone"
                  onChange={this.handleInputChange}
                  type="text" label="Side One" outline /></MDBCol>

              <MDBCol size="md-5">
                <MDBInput
                  value={this.state.sidetwo}
                  name="sidetwo"
                  onChange={this.handleInputChange}
                  type="text" label="Side Two" outline /></MDBCol>
            </MDBRow>

            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="md-10">
                <MDBSelect outline
                  options={this.state.timeOptions}
                  selected="Choose your option"
                  label="Result Time"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex justify-content-center">
              <MDBPopover
                placement="top"
                popover
                clickable
                id="popover1"
              >
                <MDBBtn onClick={this.handleFormSubmit} color="blue-grey">Sail!</MDBBtn>
                <div>
                  <MDBPopoverHeader>Post Created</MDBPopoverHeader>
                  <MDBPopoverBody>You have successfully created your Arrg-ument. Visit the Vote page to tally your vote, or visit your Profile to see your current Results.</MDBPopoverBody>
                </div>
              </MDBPopover>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


    )
  };
}

Create.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});




export default connect(
  mapStateToProps,

)(Create);