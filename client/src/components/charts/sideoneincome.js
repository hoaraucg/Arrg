import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import API from "../../utils/Api";
import PropTypes from "prop-types";
import { connect } from "react-redux";




class SideOneIncome extends React.Component {
  state = {
 
    dataPie: {
        labels: ["Less than $20,000 Annually", "$20,000 - $40,000", "$40,000 - $70,000", "$70,000 - $100,00", "$100,000 - $150,000", "More than 150,000"],
        datasets: [
          {
            data: [this.props.totalSideOneTwenty,
                this.props.totalSideOneForty,
                this.props.totalSideOneSeventy,
                this.props.totalSideOneHundred,
                this.props.totalSideOneHundredFifty,
                this.props.totalSideOneAboveHundredFifty],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
              "#AC64AD", 
              "#F7464A"
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
              "#DA92DB", 
              "#FF5A5E"
            ]
          }
        ]
      }
    }
  


  argumentResults = (argue) => {
      const id = argue._id;
      const userPostedArgument = argue.userPostedArgument;
      if (userPostedArgument) return; 
      const { user } = this.props.auth;

      API.getArgument(id)
      .then(res => {
        console.log(res);
        var data = {
          sideOneVote: res.data.sideOneVote
        //   sideTwoVote: res.data.sideTwoVote,
        //   totalVotes: res.data.sideOneVote.length + res.data.sideTwoVote.length + 1,
        //   user: user.name
        }
  })
  .catch(err => console.log("this should be the error " + err));
}

componentWillReceiveProps(nextProps) {
    if(this.props != nextProps) {
        let newDataPie=this.state.dataPie;
        newDataPie.datasets[0].data=[nextProps.totalSideOneTwenty,
            nextProps.totalSideOneForty,
            nextProps.totalSideOneSeventy,
            nextProps.totalSideOneHundred,
            nextProps.totalSideOneHundredFifty,
            nextProps.totalSideOneAboveHundredFifty]
      this.setState({
        dataPie: newDataPie
      });
    }
  }

render() {
    console.log(this.props, "this is my sideoneincome props")
    return (
      <MDBContainer>
        <h3 className="mt-5">Side One Income Level Demographic Data</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

SideOneIncome.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(
    mapStateToProps,
  
  )(SideOneIncome)
