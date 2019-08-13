import React, { Component } from "react";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBCard, MDBJumbotron, MDBContainer, MDBCardBody } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Profile extends Component {
    state = {
        argumentId: [],
        arguments: []
    };

    getArgumentList = (id) => {
        API.getUserArgument(id)
            .then(res => {
                this.setState({ argumentId: res.data.arguments })
                // console.log("This is the argumentID " + this.state.argumentId)
                this.state.argumentId.map(ids => {
                    // console.log(argue)
                    this.setState({ arguments: [ids]})
                    return ids
                    // console.log("This is the first argument in the array " + this.state.arguments)
                })
                this.loadArguments(this.state.arguments)
                
            })
            .catch(err => console.log("This should be the error " + err));
    }

    loadArguments = (id) => {
        API.getArgument(id)
            .then(res => 
                this.setState({ arguments: res.data.title }))
                console.log(this.state.arguments)
            }
    

    componentDidMount() {
        const { user } = this.props.auth;
        this.getArgumentList(user.id)
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

