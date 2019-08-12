import React, { Component } from "react";
// import ProjectsPage from "../components/Post";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBContainer, MDBView, MDBMask, MDBCardBody } from "mdbreact";
import { CardTitle } from "../components/Post";


class Vote extends Component {
  state = {
    argument: [],
    // totalCount: 0,
    // sideOneTotal: 0,
    // sideTwoTotal: 0
  };


  handleSideOne = (id) => {
    API.getArgument(id)
    .then(res => {
      var data = {
      sideOneVote: res.data.sideOneVote + 1,
      sideTwoVote: res.data.sideTwoVote,
      totalVotes: res.data.totalVotes + 1
      }
      API.updateVotes(id,data)
      .then(res => {
        this.getArgumentList()
      })
    })
      .catch(err => console.log ("this should be the error " + err));
  }

  handleSideTwo = (id) => {
    API.getArgument(id)
    .then(res => {
      var data = {
      sideOneVote: res.data.sideOneVote,
      sideTwoVote: res.data.sideTwoVote + 1,
      totalVotes: res.data.totalVotes + 1
      }
      API.updateVotes(id,data)
      .then(res => {
        this.getArgumentList()
      })
    })
      .catch(err => console.log ("this should be the error " + err));
  }

  // handleIncrement = (id) => {
  //   var data = {
  //     sideOneVote: this.state.sideOneTotal,
  //     sideTwoVote: this.state.sideTwoTotal,
  //     totalVotes: this.state.totalCount
  //   }
  //   API.updateVotes(id, data)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log("This should be the error " + err));
  //   this.getArgumentList()
  // };

  // handleClick = () => {
  //   this.setState({
  //     bgColor: "red"
  //   })
  // }

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
                          <MDBCol style={{ color: "white", fontSize: 50, border: "1px solid grey", borderOpacity: 0.3 }} size="md-9" ><MDBCardBody className="z-depth-5">{argue.title}</MDBCardBody></MDBCol>
                          <MDBCol style={{ color: "white", fontSize: 18, border: "1px solid grey"}} size="md-1" ><p class="text-center">Votes: <br></br> {argue.totalVotes}</p></MDBCol>
                          <MDBCol style={{ color: "white", fontSize: 30, border: "1px solid grey" }} size="md-10">{argue.main}</MDBCol>
                          <MDBCol style={{ color: "orange", fontSize: 20 }} size="md-5" id="one" onClick={() => this.handleSideOne(argue._id)}><MDBView hover>
                            <img
                              src="http://pngimg.com/uploads/flags/flags_PNG14700.png"
                              className="img-fluid"
                              alt=""
                              style={{ opacity: 0.3 }}

                            />
                            <div style={{ position: 'absolute', top: 20, left: 10, right: 10, bottom: 20, justifyContent: 'center', alignItems: 'center' }}><p className="font-weight-bolder"><h2>broadSIDE 1:</h2><br></br><br></br>{argue.sideone}</p></div>
                            <MDBMask className="flex-center" overlay="red-strong">
                              <p className="white-text">Parley!<br></br>Click to Cast Yer Vote</p>
                            </MDBMask>
                          </MDBView>
                          </MDBCol>
                          <MDBCol style={{ color: "orange", fontSize: 20 }} size="md-5" id="two"
                            onClick={() => this.handleSideTwo(argue._id)}>
                            <MDBView hover>
                              <img
                                src="http://pngimg.com/uploads/flags/flags_PNG14700.png"
                                className="img-fluid"
                                alt=""
                                style={{ opacity: 0.3 }}

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
