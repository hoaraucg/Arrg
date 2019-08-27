import React, { Component } from "react";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBCard, MDBJumbotron, MDBContainer, MDBCardBody } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Profile extends Component {
    state = {
        argumentId: [],
        argument: []
    };

    handleUserArguments = (id) => {
        const userWroteArgument = id.userWroteArgument;
        if (userWroteArgument) return;
        const { user } = this.props.auth;

        API.getUserArgument(id)
        .then (res => {
            const argument = res.data;
            const { user } = this.props.auth;
            const userName = user.name;

            argument.map((a) => {
                const userWroteArgument = a.userWroteArgument;

                userWroteArgument.map ((u)=> {
                if (u === userName) a.userWroteArgument = true;
                })
            }
            )
           
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
    //             // this.setState({ argumentId: res.data.arguments })
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
                <MDBRow className="justify-content-center">
                    {/* {this.state.arguments.map(argues => {
                            return ( */}
                    <MDBCard size="md-5">
                        {console.log(this.state.argumentId)}
                        {console.log(this.state.arguments)}
                        <MDBCardBody>{this.state.arguments}</MDBCardBody>
                    </MDBCard>
                    {/* )})} */}
                </MDBRow>


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

