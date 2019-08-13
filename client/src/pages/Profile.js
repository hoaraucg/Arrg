import React, { Component } from "react";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBJumbotron, MDBContainer } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

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
                <MDBRow size="md-8" className="justify-content-center">
                    <MDBJumbotron fluid>
                        <MDBContainer>
                            <h2 className="display-4">Hey there {user.name}</h2>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </MDBContainer>
                    </MDBJumbotron>
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

