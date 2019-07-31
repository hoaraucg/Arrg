import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://wallpapercave.com/wp/RDGUQX5.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold" id="arrg">Arrg</MDBCardTitle>
                <h3 className="mx-5 mb-5">Batten down the hatches and<br></br>post your argument to declare a winner.</h3>
                <br></br>
                <MDBBtn outline color="white" className="mb-5"> Walk the Plank....</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;