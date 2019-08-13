import React, { Component } from "react";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBCard, MDBJumbotron, MDBContainer, MDBView, MDBMask, MDBCardBody } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { Redirect } from "react-router-dom";

class Profile extends Component {
    state = {

    };

    getArgumentList = (id) => {
        API.getArguments()
            .then(res => {
                this.setState({ argument: res.data })
            })
            .catch(err => console.log("This should be the error " + err));
    }

    componentDidMount() {
        this.getArgumentList()
    }

    render() {
        const { user } = this.props.auth;
        return (
            <MDBCol size="md-12">
                <MDBRow size="md-8" className="justify-content-center mt-10">
                    <MDBJumbotron fluid>
                        <MDBContainer>
                            <h2 className="display-4">Hey there {user.name}</h2>
                        </MDBContainer>
                    </MDBJumbotron>
                </MDBRow>
                <MDBRow className="justify-content-center">
                    <MDBCard size="md-5">
                        <MDBCardBody>This is some text within a panel body.</MDBCardBody>
                    </MDBCard>
                    <MDBCard size="md-5">
                        <MDBCardBody>This is some text within a panel body.</MDBCardBody>
                    </MDBCard>
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

