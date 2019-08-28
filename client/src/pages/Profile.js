import React, { Component } from "react";
import API from "../utils/Api";

import { MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBMask, MDBView, MDBContainer, MDBCardBody, MDBCollapse,
  MDBCollapseHeader,
  MDBIcon } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { CardTitle } from "../components/Post";
import  TotalVotes from "../components/charts/totalvote";
import  TotalSex from "../components/charts/sexdemographic";
import  SideOneAge from "../components/charts/sideoneage";
import  SideTwoAge from "../components/charts/sidetwoage";
import  SideOneRace from "../components/charts/sideonerace";
import  SideTwoRace from "../components/charts/sidetworace";




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

        API.getUserArgument(id)
            .then(res => {
                const data = res.data;
                this.setState({ argument: res.data.arguments, currentArgument: res.data.arguments[0] })
                console.log(data.arguments);
            })
            .catch(err => console.log("this should be the error " + err));
    }

    argumentClick = () => {

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
            <MDBContainer>
                <MDBCol size="md-12">
                    <MDBRow size="md-8" className="justify-content-center">
                        <MDBCard text-center z-depth-5>
                            <MDBCardBody style={{ marginTop: 4, fontSize: 32 }} justify-content-center text-center>Hey there, {user.name}</MDBCardBody>
                            <MDBCardBody>Here, you can view any Arrg-uments you may have posted as well as any data that's been collected related to the user's that have voted one way or another.</MDBCardBody>
                        </MDBCard>
                    </MDBRow>
                </MDBCol>
                <MDBRow className="justify-content-center">

                {this.state.argument.map(argue => {
                    return (

                            <div className="import" key={argue._id} onClick = {() => this.setState({currentArgument:argue})}>

                                <MDBView hover>
                                    <MDBCard style={{ width: "22rem", marginLeft: 5, marginRight: 5, background: "#212121" }} className="shadow-box-example hoverable">
                                        {/* <a href={"/arguments/" + argue._id}> */}
                                        <MDBCardBody>
                                            <MDBCardTitle style={{ color: "white", fontSize: 30 }} className="center">{argue.title}</MDBCardTitle>
                                            <MDBCardText style={{ color: "white", fontSize: 14 }} className="center">Total Votes: {argue.totalVotes}</MDBCardText>
                                            <br />
                                            <MDBCardText style={{ color: "white", fontSize: 24 }} className="center">{argue.main}</MDBCardText>
                                            {/* <MDBCardText style={{ color: "orange", fontSize: 20 }} id="one"> {argue.sideone}</MDBCardText>
                                        <MDBCardText style={{ color: "orange", fontSize: 20 }} id="two"> {argue.sidetwo}</MDBCardText> */}
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBMask className="flex-center" overlay="stylish-strong">
                                        {/* <p className="white-text strong">See results for this Arrg-ument</p> */}
                                    </MDBMask>
                                </MDBView>
                            </div>
                        )
                    }
                    )}
                </MDBRow>
                <MDBRow>
                <MDBContainer>
       { this.state.currentArgument.sideOneVote && this.state.currentArgument.sideTwoVote &&
       (this.state.currentArgument.sideOneVote.length >= 1 || this.state.currentArgument.sideTwoVote.length >= 1) ? (  <MDBContainer
          className='accordion md-accordion accordion-3 z-depth-1-half'
        >
          <div className='d-flex justify-content-center pt-5'>
            <MDBIcon icon='anchor' className='red-text mx-3' size='2x' />
          </div>
          <h2 class='text-center text-uppercase red-text py-4 px-3'>
            {this.state.currentArgument.title}
          </h2>

          <hr class='mb-0' />

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse1')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
            


               {(this.state.currentArgument.sideOneVote.length > this.state.currentArgument.sideTwoVote.length) ? (
               "Side One Wins! View Total Votes" 
               ):
               ("Side Two Wins! View Total Votes")}

                 
                 
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
               <TotalVotes sideOneTotal={this.state.currentArgument.sideOneVote ? this.state.currentArgument.sideOneVote.length : 0}
               sideTwoTotal={this.state.currentArgument.sideTwoVote ? this.state.currentArgument.sideTwoVote.length : 0} />
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
              Demographic Data!
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
               <TotalSex                
               totalMalesSideOne={this.state.currentArgument.sideOneVote.filter(user => user.sex === "Male").length}
               totalFemalesSideOne={this.state.currentArgument.sideOneVote.filter(user => user.sex === "Female").length}
               totalMalesSideTwo={this.state.currentArgument.sideTwoVote.filter(user => user.sex === "Male").length}
               totalFemalesSideTwo={this.state.currentArgument.sideTwoVote.filter(user => user.sex === "Female").length} />
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
              Age demographic data!
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
                <SideOneAge totalSideOneUnderEighteen={this.state.currentArgument.sideOneVote.filter(user => user.ageRange === "Under 18").length}
               totalSideOneEighteenUp={this.state.currentArgument.sideOneVote.filter(user => user.ageRange === "18-24").length}
               totalSideOneTwentyFiveUp={this.state.currentArgument.sideOneVote.filter(user => user.ageRange === "25-32").length}
               totalSideOneThirtyThreeUp={this.state.currentArgument.sideOneVote.filter(user => user.ageRange === "33-40").length}
               totalSideOneFortyOneUp={this.state.currentArgument.sideOneVote.filter(user => user.ageRange === "41-50").length}
               totalSideOneFiftyUp={this.state.currentArgument.sideOneVote.filter(user => user.ageRange === "50 +").length} />
                </p>
                <p>
                <SideTwoAge totalSideTwoUnderEighteen={this.state.currentArgument.sideTwoVote.filter(user => user.ageRange === "Under 18").length}
               totalSideTwoEighteenUp={this.state.currentArgument.sideTwoVote.filter(user => user.ageRange === "18-24").length}
               totalSideTwoTwentyFiveUp={this.state.currentArgument.sideTwoVote.filter(user => user.ageRange === "25-32").length}
               totalSideTwoThirtyThreeUp={this.state.currentArgument.sideTwoVote.filter(user => user.ageRange === "33-40").length}
               totalSideTwoFortyOneUp={this.state.currentArgument.sideTwoVote.filter(user => user.ageRange === "41-50").length}
               totalSideTwoFiftyUp={this.state.currentArgument.sideTwoVote.filter(user => user.ageRange === "50 +").length} />
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

            <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse4')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Race demographic data!
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse4'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse4' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                <SideOneRace totalSideOneAmericanIndian={this.state.currentArgument.sideOneVote.filter(user => user.race === "American Indian or Alaska Native").length}
               totalSideOneAsian={this.state.currentArgument.sideOneVote.filter(user => user.race === "Asian").length}
               totalSideOneAfricanAmerican={this.state.currentArgument.sideOneVote.filter(user => user.race === "Black or African American").length}
               totalSideOneNativeHawaiian={this.state.currentArgument.sideOneVote.filter(user => user.race === "Native Hawaiian or Other Pacific Islander").length}
               totalSideOneWhite={this.state.currentArgument.sideOneVote.filter(user => user.race === "White").length}
               totalSideOneHispanic={this.state.currentArgument.sideOneVote.filter(user => user.race === "Hispanic or Latino").length} />
                </p>
                <p>
                <SideTwoRace totalSideTwoAmericanIndian={this.state.currentArgument.sideTwoVote.filter(user => user.race === "American Indian or Alaska Native").length}
               totalSideTwoAsian={this.state.currentArgument.sideTwoVote.filter(user => user.race === "Asian").length}
               totalSideTwoAfricanAmerican={this.state.currentArgument.sideTwoVote.filter(user => user.race === "Black or African American").length}
               totalSideTwoNativeHawaiian={this.state.currentArgument.sideTwoVote.filter(user => user.race === "Native Hawaiian or Other Pacific Islander").length}
               totalSideTwoWhite={this.state.currentArgument.sideTwoVote.filter(user => user.race === "White").length}
               totalSideTwoHispanic={this.state.currentArgument.sideTwoVote.filter(user => user.race === "Hispanic or Latino").length} />
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
       </MDBContainer>
       ) : <div>
         <p> "your results are still being collected" </p>
       </div>}
      </MDBContainer>
                </MDBRow>
            </MDBContainer>
            
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

/* {this.state.arguments.map(argues => {
                            return ( */
/* <MDBCard size="md-5">
                        {console.log(this.state.argumentId)}
                        {console.log(this.state.arguments)}
                        <MDBCardBody>{this.state.arguments}</MDBCardBody>
                    </MDBCard> */
/* )})} */ 