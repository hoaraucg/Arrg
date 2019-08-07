import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import React, { Component } from "react";

class SignupPage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard>
                            <div className="header pt-3 morpheus-den-gradient">
                                <MDBRow className="d-flex justify-content-center">
                                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                                        Sign Up
                </h3>
                                </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <MDBInput label="Your email" group type="text"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        validate />
                                    <MDBInput label="Your password" group type="password"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        validate />
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Forgot
                <a
                                            href="#!"
                                            className="dark-grey-text ml-1 font-weight-bold"
                                        >
                                            Password?
                </a>
                                    </p>
                                    <MDBRow className="d-flex align-items-center mb-4 mt-5">
                                        <MDBCol md="5" className="d-flex align-items-start">
                                            <div className="text-center">
                                                <MDBBtn
                                                    color="grey"
                                                    rounded
                                                    type="button"
                                                    className="z-depth-1a"
                                                >
                                                    Sign Up
                    </MDBBtn>
                                            </div>
                                        </MDBCol>
                                        <MDBCol md="7" className="d-flex justify-content-end">
                                            <p className="font-small grey-text mt-3">
                                                Already have an account?
                    <a
                                                    href="/login"
                                                    className="dark-grey-text ml-1 font-weight-bold"
                                                >
                                                    Log In
                    </a>
                                            </p>
                                        </MDBCol>
                                    </MDBRow>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}

export default SignupPage;