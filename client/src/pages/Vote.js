import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectsPage from "../components/Post";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBContainer, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

class Vote extends Component {
  state = {
    argument: []
  };
  // Add code to get the argument with an _id equal to the id in the route param
  // e.g. http://localhost:3000/arguments/:id
  // The argument id for this route can be accessed using this.props.match.params.id
componentDidMount(){
  API.getArguments()
  .then(res => {
    console.log(res)
    this.setState({argument: res.data})
  })
  .catch(err => console.log(err));
}

render(){
return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="md-10">
            <ProjectsPage>
              <h6>
                {this.state.argument.title} 
              </h6>
            </ProjectsPage>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="md-10 md-offset-1">
            <article>
              <h1>Argument</h1>
              <p>{console.log(this.state.argument.main)}</p>
              <p>{this.state.argument.sideone}</p>
              <p>{this.state.argument.sidetwo}</p>
            </article>
          </MDBCol>
        
        {/* <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row> */}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Vote;
