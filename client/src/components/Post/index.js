import React from "react";
// import "./style.css";
import { MDBRow, MDBCol, MDBCard, MDBIcon } from "mdbreact";
// import color from "@material-ui/core/colors/teal";


export function CardTitle({ children }) {
    return (
        <section>
            <MDBRow>
                <MDBCol md="12" className="mb-4">
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundColor: "black"                        }}
                    >
                        <div className="white-text text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                            <div>
                                <h6 className="text-white py-3 font-weight-bold">
                                    <span>{children}</span>
                                </h6>
                                {/* <h3 className="py-3 font-weight-bold">
                                    <strong>Help us decide who's right!</strong>
                                </h3> */}
                                </div>
                                </div>
                        </MDBCard>
                                </MDBCol>
            </MDBRow>
            {/* <MDBRow>
                <MDBCol md="12" className="mb-4">
                <p className="pb-3">{children}</p>
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6" className="mb-4">
                <p className="pb-3">{children}</p>
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol md="6" className="mb-4">
                <p className="pb-3">{children}</p>
                </MDBCol>
            </MDBRow> */}


        </section>
    
    )}

