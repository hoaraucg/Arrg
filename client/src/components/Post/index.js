import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";
import Api from "../../utils/Api";

class ProjectsPage extends Component {

state = {
    argument: []
};

componentDidMount() {
    this.loadArgument();
};

loadArgument = () => {
    Api.getArguments().then(res => this.setState({argument: res.data}))
    .catch(err => console.log(err));
};
render() {
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
                                    <strong>{this.state.argument.title}</strong>
                                </h6>
                                <h3 className="py-3 font-weight-bold">
                                    <strong>Help us decide who's right!</strong>
                                </h3>
                                <p className="pb-3">{this.state.argument.main}</p>
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
                                    <strong>{this.state.argument.title}</strong>
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
}

export default ProjectsPage;