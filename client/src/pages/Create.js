// import React from "react";
import React, { Component, Fragment } from "react";
import { MDBInput, MDBRow, MDBCol, MDBContainer, MDBView, MDBMask, MDBSelect, MDBBtn, MDBIcon, MDBJumbotron, MDBFormInline } from "mdbreact";
import SideNavPage from "../components/Sidenav";
import FooterPage from "../components/Footer/index";
import API from "../utils/Api";


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

      onClick = nr => () =>{
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
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
//Alert the user their argument is posted
        alert(`Hello ${this.state.title} + has been submitted`);
        this.setState({
       title: ""
        });
    
        var data = {
          type: [],
          title: this.state.title,
          main: this.state.main,
          sideone: this.state.sideone,
          sidetwo: this.state.sidetwo,
          date: new Date(Date.now())
        }
  

   API.saveArgument(data)
   .then (res => {
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
        
        <MDBCol size ="md-12"> <MDBFormInline>
      <MDBInput onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} 
      value={this.state.type}
      name="type"
      onChange={this.handleInputChange}
      label="Relationship"
        type="radio" 
        id="radio1" />
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




        <MDBCol size = "md-12">
          <MDBInput 
        value={this.state.title}
        name="title"
        onChange={this.handleInputChange}
        type="text" 
        label="Argument Title" 
        outline />
        </MDBCol>

        <MDBCol size = "md-12">
          <MDBInput 
           value={this.state.main}
           name="main"
           onChange={this.handleInputChange}
          type="textarea" 
          label="Main Argument" 
          outline />
          </MDBCol>

        <MDBRow className="d-flex justify-content-center">
        <MDBCol size="md-5">
          <MDBInput 
          value={this.state.sideone}
          name="sideone"
          onChange={this.handleInputChange}
          type="textarea" label="Side One" outline /></MDBCol>

        <MDBCol size="md-5">
          <MDBInput 
          value={this.state.sidetwo}
          name="sidetwo"
          onChange={this.handleInputChange}
          type="textarea" label="Side Two" outline /></MDBCol>
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
      <MDBBtn onClick={this.handleFormSubmit} color="danger">
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