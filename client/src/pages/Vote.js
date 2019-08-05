import React, { Component } from "react";
// import ProjectsPage from "../components/Post";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { CardTitle } from "../components/Post";


class Vote extends Component {
  state = {
    argument: []
  };
  // Add code to get the argument with an _id equal to the id in the route param
  // e.g. http://localhost:3000/arguments/:id
  // The argument id for this route can be accessed using this.props.match.params.id
  componentDidMount() {
    API.getArguments()
      .then(res => {
        console.log("This is where the response should be " + res)
        this.setState({ argument: res.data })
      })
      .catch(err => console.log("This should be the error " + err));
  }

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="md-10">
              
              <h2>
                {this.state.argument.map(argue => (
                  <CardTitle>
                  <h1>
                  <div className="import" key={argue._id}>
                  <a href={"/arguments/" + argue._id}>
                    <span>
                      <MDBRow>
                      <MDBCol size="md-10" >{argue.title}</MDBCol>
                      <MDBCol size="md-10">{argue.main}</MDBCol>
                      <MDBCol size="md-5">{argue.sideone}</MDBCol>
                      <MDBCol size="md-5">{argue.sidetwo}</MDBCol>


                      </MDBRow>
                      
                    </span>
                    
                  </a>
                  
                  </div>
                  </h1>
                  </CardTitle>
                ))}
              
              </h2>
             
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="md-10 md-offset-1">
            <article>
              <h1>Argument</h1>
              <h6>
                {this.state.argument.map(argues => (
                  <div className="imports" key={argues._id}>
                    {argues.title} {argues.main} {argues.sideone} {argues.sidetwo}  
                  </div>
                ))}
              </h6>
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
