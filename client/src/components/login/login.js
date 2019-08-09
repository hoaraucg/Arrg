import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import SideNavPage from "../Sidenav/index"
import FooterPage from "../footer/footer";

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <div className="header pt-3 special-color">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
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
                      href="/register"
                    >
                      Log in
                    </MDBBtn>
                  </div>
                </MDBCol>
                <MDBCol md="7" className="d-flex justify-content-end">
                  <p className="font-small grey-text mt-3">
                    Don't have an account?
                    <a
                      href="#!"
                      className="dark-grey-text ml-1 font-weight-bold"
                    >
                      Sign up
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <SideNavPage />
      <FooterPage />
    </MDBContainer>
  );
};

export default FormPage;