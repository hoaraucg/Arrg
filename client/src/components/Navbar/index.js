import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Redirect } from "react-router-dom";


class NavbarPage extends Component {
state = {
  isOpen: false,
  errors: {},
  redirect: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

onLogoutClick = e => {
  this.props.logoutUser();
  this.setState({redirect:true})
  // console.log(this.state.redirect)
}

render() {
  const { user } = this.props.auth;
  const { redirect } = this.state.redirect;
  if (redirect) {
    return <Redirect to ="/" />
  }
  return (
      <MDBNavbar color="elegant-color-dark" className="sticky-top" dark expand="md">
        <MDBNavbarBrand>
        <div className="logo-wrapper 20x20">
                <a href="#!">
                  <img style={{width: '60px', height: '60px'}} alt="Arrg Logo" src="https://i.imgur.com/sEitLk6.png" />
                </a>
              </div>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right center>
          <MDBNavItem>
              <MDBDropdown dropdown-menu-right>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" height="60px" width="60px" className="center"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu dropdown-menu-right className="dropdown-dark">
                  <MDBDropdownItem href="/">Home</MDBDropdownItem>
                  <MDBDropdownItem href="/create">Create your Arrg-ument</MDBDropdownItem>
                  <MDBDropdownItem href="/profile">View your Profile</MDBDropdownItem>
                  <MDBDropdownItem onClick={this.onLogoutClick} href="/">Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

NavbarPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavbarPage);

