import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4 sticky-bottom" id="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className="center" md="4">
            <h5 className="title">Arrg</h5>
            <p>
Arrg is a collaborative effort to bring solutions to your real world arguments. Backed by real-time analytics, Arrg allows you to post your argument to get real feedback from neutral third parties. 
            </p>
          </MDBCol>
          <MDBCol className="center" md="4">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/create">Create an Arrg-ument!</a>
              </li>
              <li className="list-unstyled">
                <a href="/profile">View your Profile</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol className="center" md="4">
            <h5>Find us on Linkedi!</h5>
            <ul>
              <li><a href="https://www.linkedin.com/in/alexandra-baer-b9351636/">Alex</a></li>
              <li><a href="https://www.linkedin.com/in/christopher-hoarau-216051187/">Chris</a></li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Alex Baer & Christopher Hoarau
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;