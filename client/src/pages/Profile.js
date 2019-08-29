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
import  SideOneCountry from "../components/charts/sideonecountry";
import  SideTwoCountry from "../components/charts/sidetwocountry";
import  SideOneRelationship from "../components/charts/sideonerelationship";
import  SideTwoRelationship from "../components/charts/sidetworelationship";
import  SideOneEducation from "../components/charts/sideoneeducation";
import  SideTwoEducation from "../components/charts/sidetwoeducation";
import  SideOneCareer from "../components/charts/sideonecareer";
import  SideTwoCareer from "../components/charts/sidetwocareer";
import  SideOneIncome from "../components/charts/sideoneincome";
import  SideTwoIncome from "../components/charts/sidetwoincome";
import  SideOnePolitical from "../components/charts/sideonepolitical";
import  SideTwoPolitical from "../components/charts/sidetwopolitical";




class Profile extends Component {
    state = {
        argumentId: [],
        argument: [],
        currentArgument: {},
        collapseID: '',
      	DIV: ''
    };

    toggleCollapse = collapseID => () => {
      console.log(collapseID)
      this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ''
      }))
    };

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

    componentDidUpdate(prevProps, prevState) {
			console.log({
				prevState,
				state: this.state,
				updated: prevState.collapseID !== this.state.collapseID
			})
			if(prevState.collapseID !== this.state.collapseID) {
				const DIV = this.renderResults()
				this.setState({DIV:DIV });
			}
		}


    renderResults = () => {
      let DIV;
      console.log(this.state.collapseID)
      if (this.state.currentArgument.sideOneVote && this.state.currentArgument.sideTwoVote &&
       (this.state.currentArgument.sideOneVote.length >= 10 || this.state.currentArgument.sideTwoVote.length >= 10)) {
          
          DIV = (  <MDBContainer
          className='accordion md-accordion accordion-3 z-depth-1-half'
        >
          <div className='d-flex justify-content-center pt-5'>
            <MDBIcon icon='anchor' className='red-text mx-3' size='2x' />
          </div>
          <h2 class='text-center text-uppercase red-text py-4 px-3'>
            {this.state.currentArgument.title}
            <br></br>
            <h4>
            {(this.state.currentArgument.sideOneVote.length > this.state.currentArgument.sideTwoVote.length) ? (
               "Side One Wins!" 
               ):
               ("Side Two Wins!")}
               </h4>
          </h2>

          <hr class='mb-0' />

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse1')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
            


               Side One and Side Two Total Votes

                 
                 
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
              Gender Demographic Data
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
              Age Range Demographic Data
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
              Race Demographic Data
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

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse5')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Country Demographic Data
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse5'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse5' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                <SideOneCountry totalSideOneCanada={this.state.currentArgument.sideOneVote.filter(user => user.country === "Canada").length}
               totalSideOneUnitedStates={this.state.currentArgument.sideOneVote.filter(user => user.country === "United States").length}
               totalSideOneUnitedKingdom={this.state.currentArgument.sideOneVote.filter(user => user.country === "United Kingdom").length}
               totalSideOneOther={this.state.currentArgument.sideOneVote.filter(user => user.country === "Other").length}
                />
                </p>
                <p>
                <SideTwoCountry totalSideTwoCanada={this.state.currentArgument.sideTwoVote.filter(user => user.country === "Canada").length}
               totalSideTwoUnitedStates={this.state.currentArgument.sideTwoVote.filter(user => user.country === "United States").length}
               totalSideTwoUnitedKingdom={this.state.currentArgument.sideTwoVote.filter(user => user.country === "United Kingdom").length}
               totalSideTwoOther={this.state.currentArgument.sideTwoVote.filter(user => user.country === "Other").length} />
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse6')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Relationship Status Demographic Data
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse6'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse6' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                <SideOneRelationship totalSideOneSingle={this.state.currentArgument.sideOneVote.filter(user => user.relationship === "Single").length}
               totalSideOneSigOther={this.state.currentArgument.sideOneVote.filter(user => user.relationship === "Significant Other").length}
               totalSideOneMarried={this.state.currentArgument.sideOneVote.filter(user => user.relationship === "Married").length}
               totalSideOneDivorced={this.state.currentArgument.sideOneVote.filter(user => user.relationship === "Divorced").length}
               totalSideOnePartnered={this.state.currentArgument.sideOneVote.filter(user => user.relationship === "Partnered (Same-Sex)").length}
               totalSideOneDispartnered={this.state.currentArgument.sideOneVote.filter(user => user.relationship === "Dispartnered (Same-Sex)").length}
               totalSideOneWidowed={this.state.currentArgument.sideOneVote.filter(user => user.relationship === "Widowed").length}
               
                />
                </p>
                <p>
                <SideTwoRelationship totalSideTwoSingle={this.state.currentArgument.sideTwoVote.filter(user => user.relationship === "Single").length}
               totalSideTwoSigOther={this.state.currentArgument.sideTwoVote.filter(user => user.relationship === "Significant Other").length}
               totalSideTwoMarried={this.state.currentArgument.sideTwoVote.filter(user => user.relationship === "Married").length}
               totalSideTwoDivorced={this.state.currentArgument.sideTwoVote.filter(user => user.relationship === "Divorced").length}
               totalSideTwoPartnered={this.state.currentArgument.sideTwoVote.filter(user => user.relationship === "Partnered (Same-Sex)").length}
               totalSideTwoDispartnered={this.state.currentArgument.sideTwoVote.filter(user => user.relationship === "Dispartnered (Same-Sex)").length}
               totalSideTwoWidowed={this.state.currentArgument.sideTwoVote.filter(user => user.relationship === "Widowed").length} />
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>


          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse7')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Education Demographic Data
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse7'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse7' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                <SideOneEducation totalSideOneHighSchool={this.state.currentArgument.sideOneVote.filter(user => user.education === "High School").length}
              totalSideOneSomeCollege={this.state.currentArgument.sideOneVote.filter(user => user.education === "Some College").length}
              totalSideOneAssocDegree={this.state.currentArgument.sideOneVote.filter(user => user.education === "Associates Degree").length}
              totalSideOneBachDegree={this.state.currentArgument.sideOneVote.filter(user => user.education === "Bachelors Degree").length}
              totalSideOneMasterDegree={this.state.currentArgument.sideOneVote.filter(user => user.education === "Masters Degree").length}
              totalSideOneCert={this.state.currentArgument.sideOneVote.filter(user => user.education === "Certification").length}
               
                />
                </p>
                <p>
                <SideTwoEducation totalSideTwoHighSchool={this.state.currentArgument.sideTwoVote.filter(user => user.education === "High School").length}
              totalSideTwoSomeCollege={this.state.currentArgument.sideTwoVote.filter(user => user.education === "Some College").length}
              totalSideTwoAssocDegree={this.state.currentArgument.sideTwoVote.filter(user => user.education === "Associates Degree").length}
              totalSideTwoBachDegree={this.state.currentArgument.sideTwoVote.filter(user => user.education === "Bachelors Degree").length}
              totalSideTwoMasterDegree={this.state.currentArgument.sideTwoVote.filter(user => user.education === "Masters Degree").length}
              totalSideTwoCert={this.state.currentArgument.sideTwoVote.filter(user => user.education === "Certification").length} />
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>


          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse8')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Career Level Demographic Data
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse8'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse8' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                <SideOneCareer totalSideOneEntry={this.state.currentArgument.sideOneVote.filter(user => user.career === "Entry Level").length}
              totalSideOneSupervisor={this.state.currentArgument.sideOneVote.filter(user => user.career === "Supervisor").length}
              totalSideOneManager={this.state.currentArgument.sideOneVote.filter(user => user.career === "Manager").length}
              totalSideOneRegHead={this.state.currentArgument.sideOneVote.filter(user => user.career === "Regional Head").length}
              totalSideOneCxo={this.state.currentArgument.sideOneVote.filter(user => user.career === "CXO").length}
              
               
                />
                </p>
                <p>
                <SideTwoCareer totalSideTwoEntry={this.state.currentArgument.sideTwoVote.filter(user => user.career === "Entry Level").length}
              totalSideTwoSupervisor={this.state.currentArgument.sideTwoVote.filter(user => user.career === "Supervisor").length}
              totalSideTwoManager={this.state.currentArgument.sideTwoVote.filter(user => user.career === "Manager").length}
              totalSideTwoRegHead={this.state.currentArgument.sideTwoVote.filter(user => user.career === "Regional Head").length}
              totalSideTwoCxo={this.state.currentArgument.sideTwoVote.filter(user => user.career === "CXO").length} />
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse9')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Income Level Demographic Data
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse9'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse9' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                <SideOneIncome totalSideOneTwenty={this.state.currentArgument.sideOneVote.filter(user => user.income === "Less than 20,000 Annually").length}
              totalSideOneForty={this.state.currentArgument.sideOneVote.filter(user => user.income === "20,000 - 40,000").length}
              totalSideOneSeventy={this.state.currentArgument.sideOneVote.filter(user => user.income === "40,000 - 70,000").length}
              totalSideOneHundred={this.state.currentArgument.sideOneVote.filter(user => user.income === "70,000 - 100,000").length}
              totalSideOneHundredFifty={this.state.currentArgument.sideOneVote.filter(user => user.income === "100,000 - 150,000").length}
              totalSideOneAboveHundredFifty={this.state.currentArgument.sideOneVote.filter(user => user.income === "More than 150,000").length}
                />
                </p>
                <p>
                <SideTwoIncome totalSideTwoTwenty={this.state.currentArgument.sideTwoVote.filter(user => user.income === "Less than 20,000 Annually").length}
              totalSideTwoForty={this.state.currentArgument.sideTwoVote.filter(user => user.income === "20,000 - 40,000").length}
              totalSideTwoSeventy={this.state.currentArgument.sideTwoVote.filter(user => user.income === "40,000 - 70,000").length}
              totalSideTwoHundred={this.state.currentArgument.sideTwoVote.filter(user => user.income === "70,000 - 100,000").length}
              totalSideTwoHundredFifty={this.state.currentArgument.sideTwoVote.filter(user => user.income === "100,000 - 150,000").length}
              totalSideTwoAboveHundredFifty={this.state.currentArgument.sideTwoVote.filter(user => user.income === "More than 150,000").length} />
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>


          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse10')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Political Affiliation Demographic Data
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse10'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse10' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                <SideOnePolitical totalSideOneRepub={this.state.currentArgument.sideOneVote.filter(user => user.political === "Republican").length}
              totalSideOneDemo={this.state.currentArgument.sideOneVote.filter(user => user.political === "Democrat").length}
              totalSideOneLib={this.state.currentArgument.sideOneVote.filter(user => user.political === "Libertarian").length}
              totalSideOneGreen={this.state.currentArgument.sideOneVote.filter(user => user.political === "Green").length}
              totalSideOneOther={this.state.currentArgument.sideOneVote.filter(user => user.political === "Other").length}
                />
                </p>
                <p>
                <SideTwoPolitical totalSideTwoRepub={this.state.currentArgument.sideTwoVote.filter(user => user.political === "Republican").length}
              totalSideTwoDemo={this.state.currentArgument.sideTwoVote.filter(user => user.political === "Democrat").length}
              totalSideTwoLib={this.state.currentArgument.sideTwoVote.filter(user => user.political === "Libertarian").length}
              totalSideTwoGreen={this.state.currentArgument.sideTwoVote.filter(user => user.political === "Green").length}
              totalSideTwoOther={this.state.currentArgument.sideTwoVote.filter(user => user.political === "Other").length} />
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

       </MDBContainer>);
		} else {
       DIV = (
       <MDBContainer>
          
       <div className="import" onClick = {() => this.setState({})}>
          <div className='d-flex justify-content-center pt-5'>
            <MDBIcon icon='anchor' className='red-text mx-3' size='2x' />
          </div>
          <h2 class='text-center text-uppercase red-text py-4 px-3'>
            {this.state.currentArgument.title}
            <br></br>
            <h4>
               Votes are still being collected.  Check back for your results soon! 
               </h4>
          </h2>
          </div>
                   
          </MDBContainer>
          );
}	
		return DIV;
		
      
	}

    componentDidMount() {
        const { user } = this.props.auth;
        this.handleUserArguments(user.id)
    };

    render() {
        console.log(this.state);
        const { user } = this.props.auth;
      const { DIV } = this.state;
      console.log(this.state);
        return (
            <MDBContainer>
                <MDBCol size="md-12">
                    <MDBRow size="md-8" className="justify-content-center">
                        <MDBCard text-center z-depth-5>
                            <MDBCardBody style={{ marginTop: 4, fontSize: 32 }} justify-content-center text-center>Ahoy, {user.name}!</MDBCardBody>
                            <MDBCardBody>Click on your Arrg-ument below to view results and demographic data collected from your voters.</MDBCardBody>
                        </MDBCard>
                    </MDBRow>
                </MDBCol>
                <MDBRow className="justify-content-center align-items-center">

                {this.state.argument.map(argue => {
                    return (

                            <div className="import" key={argue._id} onClick = {() => {
                              //const renderResults = this.state.renderResults;
                              this.setState(
                                {currentArgument:argue},
                              	() => { this.setState({DIV:this.renderResults() }) }
                              )
                             
                            }}>

                                <MDBView hover>
                                    <MDBCard style={{ width: "22rem", marginLeft: 5, marginRight: 5, background: "#212121" }} className="shadow-box-example hoverable">
                                        {/* <a href={"/arguments/" + argue._id}> */}
                                        <MDBCardBody>
                                            <MDBCardTitle style={{ color: "white", fontSize: 30 }} className="center">{argue.title}</MDBCardTitle>
                                            <MDBCardText style={{ color: "white", fontSize: 18 }} className="center">Total Votes: {argue.totalVotes}</MDBCardText>
                                            <br />
                                            <MDBCardText style={{ color: "white", fontSize: 14 }} className="center">{argue.main}</MDBCardText>
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
                {DIV}
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