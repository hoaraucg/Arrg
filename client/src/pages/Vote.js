import React, { Component } from "react";
// import ProjectsPage from "../components/Post";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBContainer, MDBView, MDBMask } from "mdbreact";
import { CardTitle } from "../components/Post";


class Vote extends Component {
  state = {
    argument: [],
    totalCount: 1,
    sideOneTotal: 1,
    sideTwoTotal: 1
  };


handleSideOne = (id) => {
  this.setState({ 
    totalCount: this.state.totalCount + 1, 
    sideOneTotal: this.state.sideOneTotal + 1,
  });
  this.handleIncrement(id);

}

handleSideTwo = (id) => {
  this.setState({ 
    totalCount: this.state.totalCount + 1,
    sideTwoTotal: this.state.sideTwoTotal + 1,
  });
  this.handleIncrement(id);
}

  handleIncrement = (id) => {   
    var data = {
      sideOneVote: this.state.sideOneTotal,
      sideTwoVote: this.state.sideTwoTotal,
      totalVotes: this.state.totalCount
    }
    API.updateVotes(id, data)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log("This should be the error " + err));
      this.getArgumentList()
  };

  getArgumentList = () => {
    API.getArguments()
      .then(res => {
        console.log("This is where the response should be " + res)
        this.setState({ argument: res.data })
      })
      .catch(err => console.log("This should be the error " + err));
  }
  // Add code to get the argument with an _id equal to the id in the route param
  // e.g. http://localhost:3000/arguments/:id
  // The argument id for this route can be accessed using this.props.match.params.id
  componentDidMount() {
    this.getArgumentList()
}

  render() {
    return (
      <MDBContainer fluid d-flex justify-content-center>
        <MDBRow>
          <MDBCol size="md-12">

            <h2>
              {this.state.argument.map(argue => (
                <CardTitle>
                  <h1>
                    <div className="import" key={argue._id}>
                      {/* <a href={"/arguments/" + argue._id}> */}
                        <span>
                          <MDBRow className="d-flex justify-content-center">
                            <MDBCol style={{ color: "white", fontSize: 50, border: "1px solid green" }} size="md-8" >{argue.title}</MDBCol>
                            <MDBCol style={{ color: "white", fontSize: 50, border: "1px solid green" }} size="md-2" >Total Count: {argue.totalVotes}</MDBCol>
                            <MDBCol style={{ color: "white", fontSize: 30, border: "1px solid green" }} size="md-10">{argue.main}</MDBCol>
                            <MDBCol style={{ color: "orange", fontSize: 20, borderRight: "1px solid green" }} size="md-5" id="one" onClick={() => this.handleSideOne(argue._id)}><MDBView hover>
                              <img
                                src="http://pngimg.com/uploads/flags/flags_PNG14700.png"
                                className="img-fluid"
                                alt=""
                                style={{opacity: 0.3}} 
                                
                              />
                              <div style={{ position: 'absolute', top: 20, left: 10, right: 10, bottom: 20, justifyContent: 'center', alignItems: 'center' }}><p className="font-weight-bolder"><h2>broadSIDE 1:</h2><br></br><br></br>{argue.sideone}</p></div>
                              <MDBMask className="flex-center" overlay="red-strong">
                                <p className="white-text">Parley!<br></br>Click to Cast Yer Vote</p>
                              </MDBMask>
                            </MDBView>
                            </MDBCol>
                            <MDBCol style={{ color: "orange", fontSize: 20 }} size="md-5" id="two" onClick={() => this.handleSideTwo(argue._id)}><MDBView hover>
                              <img
                                src="http://pngimg.com/uploads/flags/flags_PNG14700.png"
                                className="img-fluid"
                                alt=""
                                style={{opacity: 0.3}} 
                                
                              />
                              <div style={{ position: 'absolute', top: 20, left: 10, right: 10, bottom: 20, justifyContent: 'center', alignItems: 'center' }}><p className="font-weight-bolder"><h2>broadSIDE 2:</h2><br></br><br></br>{argue.sidetwo}</p></div>
                              <MDBMask className="flex-center" overlay="red-strong">
                                <p className="white-text font-weight-bolder">Parley!<br></br>Click to Cast Yer Vote</p>
                              </MDBMask>
                            </MDBView>
                            </MDBCol>
                          </MDBRow>

                        </span>

                      {/* </a> */}

                    </div>
                  </h1>
                </CardTitle>
              ))}

            </h2>

          </MDBCol>
        </MDBRow>
        <MDBRow>
        
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Vote;
