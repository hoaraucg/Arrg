import React, { Component } from "react";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBCard, MDBJumbotron, MDBContainer, MDBCardBody } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Profile extends Component {
    state = {
        argumentId: {},
        arguments: []
    };

    getArgumentList = (id) => {
            API.getUserArgument(id)
            .then(res => {
                this.setState({ argumentId: res.data })
                console.log(this.state.argumentId)
                this.loadArguments(res.data.arguments[0]);
                console.log(res.data.arguments[0])
            })
            .catch(err => console.log("This should be the error " + err));

    }

    loadArguments = (id) => {
        API.getArgument(id)
        .then(res => {
            this.setState({arguments: res.data})
            console.log(this.state.arguments)
        })
    }
        

    componentDidMount() {
        const { user } = this.props.auth; 
        this.getArgumentList(user.id)
    };

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

