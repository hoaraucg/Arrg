import React from "react";
// import "./style.css";
import { MDBRow, MDBCol, MDBCard } from "mdbreact";
// import color from "@material-ui/core/colors/teal";


export function CardTitle({ children }) {
    return (
        <section>
            <MDBRow className = "d-flex justify-content-center">
                <MDBCol md="11" className="mt-5">
                    <MDBCard
                    style ={{opacity: 1.0}}
                        className="card-image special-color-dark" 
                        id= "argumentviews"
                        // style={{
                        //     backgroundColor: "gray"
                        // }}
                    >
                        <div className="text-center d-flex align-items-center py-5 px-4 rounded">
                            <div>
                                <h6 className="py-3 font-weight-bold" id="argumentview">
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

    )
}

