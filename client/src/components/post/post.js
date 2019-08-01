import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

const ProjectsPage = () => {
    return (
        <section className="text-center my-5">
            <MDBRow>
                <MDBCol md="12" className="mb-4">
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage:
                                "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
                        }}
                    >
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                            <div>
                                <h6 className="purple-text">
                                    <MDBIcon icon="plane" />
                                    <strong>Why is MD Bootstrap so awesome?</strong>
                                </h6>
                                <h3 className="py-3 font-weight-bold">
                                    <strong>Help us decide who's right!</strong>
                                </h3>
                                <p className="pb-3">
                                    MD Bootstrap is a framework that makes all your front end design needs super simple, allowing you to spend your time doing what actually matters, Back end!
              </p>
                                <MDBBtn color="secondary" rounded size="md">
                                    <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-4">
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage:
                                "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
                        }}
                    >
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                            <div>
                                <h6 className="pink-text">
                                    <MDBIcon icon="eye" />
                                    <strong> Alex's Side of the Story</strong>
                                </h6>
                                <h3 className="py-3 font-weight-bold">
                                    <strong>It looks so good!</strong>
                                </h3>
                                <p className="pb-3">
                                    All of these components are well defined and look like a ton of work has been put into them.
              </p>
                                <MDBBtn color="pink" rounded size="md">
                                    <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-4">
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage:
                                "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
                        }}
                    >
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                            <div>
                                <h6 className="green-text">
                                    <MDBIcon icon="eye" />
                                    <strong> Chris' Side of the Story</strong>
                                </h6>
                                <h3 className="py-3 font-weight-bold">
                                    <strong> So easy to use! </strong>
                                </h3>
                                <p className="pb-3">
                                    Not only is it just pretty, but it's so easily implemented it makes our lives so much easier!
              </p>
                                <MDBBtn color="success" rounded size="md">
                                    <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-4">
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage:
                                "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
                        }}
                    >
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                            <div>
                                <h6 className="pink-text">
                                    <MDBIcon icon="eye" />
                                    <strong> Alex's Side of the Story</strong>
                                </h6>
                                <h3 className="py-3 font-weight-bold">
                                    <strong>It looks so good!</strong>
                                </h3>
                                <p className="pb-3">
                                    All of these components are well defined and look like a ton of work has been put into them.
              </p>
                                <MDBBtn color="pink" rounded size="md">
                                    <MDBIcon far icon="clone" className="left" /> MDBView project
              </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default ProjectsPage;