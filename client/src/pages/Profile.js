import React, { Component } from "react";
import API from "../utils/Api";
import { MDBRow, MDBCol, MDBCard, MDBJumbotron, MDBContainer, MDBCardBody,
    MDBCollapse,
    MDBCollapseHeader,
    MDBIcon} from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { CardTitle } from "../components/Post";

class Profile extends Component {
    state = {
        argumentId: [],
        argument: [], 
        currentArgument: {},
        collapseID: 'collapse1'
    };

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

    handleUserArguments = (id) => {
        const userWroteArgument = id.userWroteArgument;
        if (userWroteArgument) return;
        const { user } = this.props.auth;

        API.getUserArgument(id)
        .then (res => {
            const data = res.data;
            const { user } = this.props.auth;
            const userName = user.name;
            this.setState({ argument: res.data.arguments, currentArgument: res.data.arguments[0] })
            console.log(data.arguments);
    })
        .catch(err => console.log("this should be the error " + err));
    }

    // getArgumentList = (id) => {
    //     API.getUserArgument(id)
    //         .then(res => {
    //             const arguments = res.data; 
    //             const { user } = this.props.auth;
    //             const userName = user.name;

    //             arguments.map ((id) => {
    //             })
                // this.setState({ argumentId: res.data.arguments })
    //             // console.log(res)
    //             // console.log("This is the argumentID " + this.state.argumentId)
    //             // this.state.argumentId.map(ids => {
    //                 // console.log(argue)
    //                 // this.setState({ arguments: [ids]})
    //                 // console.log(this.state.arguments)
    //                 // return ids
    //             })
                // this.loadArguments(this.state.arguments)
                
            // })
            // .catch(err => console.log("This should be the error " + err));
    // }

    // loadArguments = (id) => {
    //     API.getArgument(id)
    //         .then(res => {
    //             const arguments = res.data
    //             // this.setState({ arguments: res.data.title })
    //             console.log(arguments)
    //             arguments.map((argue) => {
    //                 const id = argue._id
    //                 console.log(id)
    //         })
    //     })
    // };


    componentDidMount() {
        const { user } = this.props.auth;
        this.handleUserArguments(user.id)
    };

    render() {
        console.log(this.state);
        const { user } = this.props.auth;
        return (
            <MDBCol size="md-12">
                <MDBRow size="md-8" className="justify-content-center">
                    <MDBJumbotron fluid>
                        <MDBContainer>
                            <h2 className="display-4">Hey there {user.name}</h2>
                        </MDBContainer>
                    </MDBJumbotron>
                </MDBRow>
                <h2>
                    {this.state.argument.map(argue =>{
                        return (

                        
                <CardTitle>
                <MDBRow className="justify-content-center">
                <h1>
                      <div className="import" key={argue}>
                        {/* <a href={"/arguments/" + argue._id}> */}
                        <span>
                          <MDBRow className="d-flex justify-content-center">
                            <MDBCol style={{ color: "white", fontSize: 40 }} size="md-10" >
                              <MDBCardBody>
                            {argue.title}</MDBCardBody>
                           
                            </MDBCol>
                            <MDBCol style={{ color: "white", fontSize: 18 }} size="md-10" ><p class="text-center">Total Votes: {argue.totalVotes}</p></MDBCol>
                            <br />
                            <MDBCol style={{ color: "white", fontSize: 30}} size="md-10">{argue.main}</MDBCol>
                            <MDBCol style={{ color: "orange", fontSize: 20 }} size="md-5" id="one"> {argue.sideone}</MDBCol>
                            <MDBCol style={{ color: "orange", fontSize: 20 }} size="md-5" id="two"> {argue.sidetwo}</MDBCol>
                        
                            <MDBContainer>
        <MDBContainer
          className='accordion md-accordion accordion-3 z-depth-1-half'
        >
          <div className='d-flex justify-content-center pt-5'>
            <MDBIcon icon='anchor' className='red-text mx-3' size='2x' />
            <MDBIcon far icon='life-ring' className='red-text mx-3' size='2x' />
            <MDBIcon far icon='star' className='red-text mx-3' size='2x' />
          </div>
          <h2 class='text-center text-uppercase red-text py-4 px-3'>
            Hello my friends, I am the nicest accordion!
          </h2>

          <hr class='mb-0' />

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse1')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              How awesome accordion I am?
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse1'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse1' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse2')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              You're the greatest accordion!
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse2'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse2' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse3')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Thank you my dear!
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse3'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse3' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
                          </MDBRow>

                        </span>
                      </div>
                    </h1>

               
                    
                </MDBRow>
                </CardTitle>
)
})}
</h2>
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

{/* {this.state.arguments.map(argues => {
                            return ( */}
                    {/* <MDBCard size="md-5">
                        {console.log(this.state.argumentId)}
                        {console.log(this.state.arguments)}
                        <MDBCardBody>{this.state.arguments}</MDBCardBody>
                    </MDBCard> */}
                    {/* )})} */}