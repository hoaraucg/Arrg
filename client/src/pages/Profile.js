import React, { Component } from "react";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBCard, MDBJumbotron, MDBContainer, MDBCardBody } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { CardTitle } from "../components/Post";

class Profile extends Component {
    state = {
        argumentId: [],
        argument: [], 
        currentArgument: {}
    };

    handleUserArguments = (id) => {
        const userWroteArgument = id.userWroteArgument;
        if (userWroteArgument) return;
        const { user } = this.props.auth;

        API.getUserArgument(id)
        .then (res => {
            const data = res.data;
            const { user } = this.props.auth;
            const userName = user.name;
            this.setState({ argument: res.data.arguments, currentArgument: res.data.arguments[0] })
            console.log(data.arguments);
    })
        .catch(err => console.log("this should be the error " + err));
    }

    // getArgumentList = (id) => {
    //     API.getUserArgument(id)
    //         .then(res => {
    //             const arguments = res.data; 
    //             const { user } = this.props.auth;
    //             const userName = user.name;

    //             arguments.map ((id) => {
    //             })
                // this.setState({ argumentId: res.data.arguments })
    //             // console.log(res)
    //             // console.log("This is the argumentID " + this.state.argumentId)
    //             // this.state.argumentId.map(ids => {
    //                 // console.log(argue)
    //                 // this.setState({ arguments: [ids]})
    //                 // console.log(this.state.arguments)
    //                 // return ids
    //             })
                // this.loadArguments(this.state.arguments)
                
            // })
            // .catch(err => console.log("This should be the error " + err));
    // }

    // loadArguments = (id) => {
    //     API.getArgument(id)
    //         .then(res => {
    //             const arguments = res.data
    //             // this.setState({ arguments: res.data.title })
    //             console.log(arguments)
    //             arguments.map((argue) => {
    //                 const id = argue._id
    //                 console.log(id)
    //         })
    //     })
    // };


    componentDidMount() {
        const { user } = this.props.auth;
        this.handleUserArguments(user.id)
    };

    render() {
        const { user } = this.props.auth;
        return (
            <MDBCol size="md-12">
                <MDBRow size="md-8" className="justify-content-center">
                    <MDBJumbotron fluid>
                        <MDBContainer>
                            <h2 className="display-4">Hey there {user.name}</h2>
                        </MDBContainer>
                    </MDBJumbotron>
                </MDBRow>
                <CardTitle>
                <MDBRow className="justify-content-center">
                <h1>
                      <div className="import" key={user}>
                        {/* <a href={"/arguments/" + argue._id}> */}
                        <span>
                          <MDBRow className="d-flex justify-content-center">
                            <MDBCol style={{ color: "white", fontSize: 40 }} size="md-10" >
                              <MDBCardBody>
                            {user.title}</MDBCardBody>
                           
                            </MDBCol>
                            <MDBCol style={{ color: "white", fontSize: 18 }} size="md-10" ><p class="text-center">Total Votes: {user.totalVotes}</p></MDBCol>
                            <br />
                            <MDBCol style={{ color: "white", fontSize: 30}} size="md-10">{user.main}</MDBCol>
                            <MDBCol style={{ color: "orange", fontSize: 20 }} size="md-5" id="one"> {user.sideone}</MDBCol>
                            <MDBCol style={{ color: "orange", fontSize: 20 }} size="md-5" id="two"> {user.sidetwo}</MDBCol>
                            
                          </MDBRow>

                        </span>
                      </div>
                    </h1>

               
                    
                </MDBRow>
                </CardTitle>

            </MDBCol>
        )
        }
    }


Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);

{/* {this.state.arguments.map(argues => {
                            return ( */}
                    {/* <MDBCard size="md-5">
                        {console.log(this.state.argumentId)}
                        {console.log(this.state.arguments)}
                        <MDBCardBody>{this.state.arguments}</MDBCardBody>
                    </MDBCard> */}
                    {/* )})} */}