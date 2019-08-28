import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import API from "../../utils/Api";
import PropTypes from "prop-types";
import { connect } from "react-redux";



class SideTwoAge extends React.Component {
  state = {

    dataPie: {
        labels: ["Under 18", "18-24", "25-32", "33-40", "41-50", "50 +"],
        datasets: [
          {
            data: [this.props.totalSideTwoUnderEighteen,
                this.props.totalSideTwoEighteenUp,
                this.props.totalSideTwoTwentyFiveUp,
                this.props.totalSideTwoThirtyThreeUp,
                this.props.totalSideTwoFortyOneUp,
                this.props.totalSideTwoFiftyUp],
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
          sideTwoVote: res.data.sideTwoVote
        //   sideTwoVote: res.data.sideTwoVote,
        //   totalVotes: res.data.sideOneVote.length + res.data.sideTwoVote.length + 1,
        //   user: user.name
        }
  })
  .catch(err => console.log("this should be the error " + err));
}


render() {
    console.log(this.props, "this is my sidetwoage props")
    return (
      <MDBContainer>
        <h3 className="mt-5">Side Two Age Demographic</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

SideTwoAge.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(
    mapStateToProps,
  
  )(SideTwoAge)
