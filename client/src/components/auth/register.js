import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBSelect, MDBInput, MDBCardBody, MDBCard } from 'mdbreact';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            country: '',
            sex: '',
            race: '',
            ageRange: '',
            political: '',
            relationship: '',
            income: '',
            education: '',
            career: '',
            errors: {},
            countries: [
                { value: 'Canada', text: 'Canada' },
                { value: 'United States', text: 'United States' },
                { value: 'United Kingdom', text: 'United Kingdom' },
            ],
            sexOptions: [
                { value: 'male', text: 'Male' }, { value: 'female', text: 'Female' }
            ],
            raceOptions: [
                { value: 'American Indian or Alaska Native', text: 'American Indian or Alaska Native' },
                { value: 'Asian', text: 'Asian' },
                { value: 'Black or African American', text: 'Black or African American' },
                { value: 'Native Hawaiian or Other Pacific Islander', text: 'Native Hawaiian or Other Pacific Islander' },
                { value: 'White', text: 'White' },
                { value: 'Hispanic or Latino', text: 'Hispanic or Latino' }
            ],
            ageOptions: [
                { value: 'Under 18', text: 'Under 18' },
                { value: '18-24', text: '18-24' },
                { value: '25-32', text: '25-32' },
                { value: '33-40', text: '33-40' },
                { value: '41-50', text: '41-50' },
                { value: 'Over 50', text: 'Over 50' },
            ],
            politicOptions: [
                { value: 'Republican', text: 'Republican' },
                { value: 'Democrat', text: 'Democrat' },
                { value: 'Libertarian', text: 'Libertarian' },
                { value: 'Green', text: 'Green' },
                { value: 'Other', text: 'Other' },
            ],
            relationshipOptions: [
                { value: 'Single', text: 'Single' },
                { value: 'Significant Other', text: 'Significant Other' },
                { value: 'Married', text: 'Married' },
                { value: 'Divorced', text: 'Divorced' },
                { value: 'Partnered (Same-Sex)', text: 'Partnered (Same-Sex)' },
                { value: 'Dispartnered (Same-Sex', text: 'Dispartnered (Same-Sex)' },
                { value: 'Widowed', text: 'Widowed' },
            ],
            incomeOptions: [
                { value: 'Less than 20,000 Annually', text: 'Less than 20,000 Annually' },
                { value: '20,000 - 40,000', text: '20,000 - 40,000' },
                { value: '40,000 - 70,000', text: '40,000 - 70,000' },
                { value: '70,000 - 100,000', text: '70,000 - 100,000' },
                { value: '100,000 - 150,000', text: '100,000 - 150,000' },
                { value: 'More than 150,000 Annually', text: 'More than 150,000 Annually' },
            ],
            educationOptions: [
                { value: 'High School', text: 'High School' },
                { value: 'Some College', text: 'Some College' },
                { value: 'Associates Degree', text: 'Associates Degree' },
                { value: 'Bachelors Degree', text: 'Bachelors Degree' },
                { value: 'Masters Degree', text: 'Masters Degree' },
                { value: 'Certification', text: 'Certification' },
            ],
            careerOptions: [
                { value: 'Entry Level', text: 'Entry Level' },
                { value: 'Supervisor', text: 'Supervisor' },
                { value: 'Manager', text: 'Manager' },
                { value: 'Regional Head', text: 'Regional Head' },
                { value: 'CXO', text: 'CXO' },
            ]
        };

    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/register");
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onGetValue = (value, state) => {
        this.setState({ [state]: value });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            country: this.state.country[0],
            sex: this.state.sex,
            race: this.state.race,
            ageRange: this.state.ageRange,
            political: this.state.political,
            relationship: this.state.relationship,
            income: this.state.income,
            education: this.state.education,
            career: this.state.career
        };
        console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='12'>
                        <MDBCard>
                            <div className='header pt-3 morpheus-den-gradient'>
                                <MDBRow className='d-flex justify-content-center'>
                                    <h3 className='white-text mb-3 pt-3 font-weight-bold'>
                                        Sign Up
                  </h3>
                                </MDBRow>
                            </div>

                            <MDBCardBody className='mx-4 mt-4'>
                                <form noValidate onSubmit={this.onSubmit}>
                                    <MDBInput
                                        label='Your name'                                        
                                        type='text'
                                        id='name'
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        error={errors.name}
                                        className={classnames("", {
                                            invalid: errors.name
                                          })}
                                    />
                                    <MDBInput
                                        label='Your email'                                        
                                        type='text'
                                        id='email'
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        className={classnames("", {
                                            invalid: errors.email
                                          })}
                                    />
                                    <MDBInput
                                        label='Your password'
                                        type='password'
                                        id='password'
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        className={classnames("", {
                                            invalid: errors.password
                                          })}
                                    />
                                    <MDBInput
                                        label='Re-enter your password'
                                        group
                                        type='password'
                                        id='password2'
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        className={classnames("", {
                                            invalid: errors.password2
                                          })}
                                    />

                                    <MDBSelect
                                        id='country'
                                        options={this.state.countries}
                                        getValue={e => this.onGetValue(e, 'country')}
                                        //getTextContent={e=>this.onGetValue(e,'country')} //or this
                                        selected='Please select your Country of Origin'
                                    />

                                    <MDBSelect
                                        id='sex'
                                        options={this.state.sexOptions}
                                        // getValue={e => this.onGetValue(e, 'sex')}
                                        getTextContent={e => this.onGetValue(e, 'sex')} //or this
                                        selected='Sex'
                                    />
                                    <MDBSelect
                                        id='race'
                                        options={this.state.raceOptions}
                                        // getValue={e => this.onGetValue(e, 'sex')}
                                        getTextContent={e => this.onGetValue(e, 'race')} //or this
                                        selected='Race'
                                    />
                                    <MDBSelect
                                        id='ageRange'
                                        options={this.state.ageOptions}
                                        // getValue={e => this.onGetValue(e, 'sex')}
                                        getTextContent={e => this.onGetValue(e, 'ageRange')} //or this
                                        selected='Age Range'
                                    />
                                    <MDBSelect
                                        id='political'
                                        options={this.state.politicOptions}
                                        // getValue={e => this.onGetValue(e, 'sex')}
                                        getTextContent={e => this.onGetValue(e, 'political')} //or this
                                        selected='Political Affiliation'
                                    />
                                    <MDBSelect
                                        id='relationship'
                                        options={this.state.relationshipOptions}
                                        // getValue={e => this.onGetValue(e, 'sex')}
                                        getTextContent={e => this.onGetValue(e, 'relationship')} //or this
                                        selected='Relationship Status'
                                    />
                                    <MDBSelect
                                        id='income'
                                        options={this.state.incomeOptions}
                                        // getValue={e => this.onGetValue(e, 'sex')}
                                        getTextContent={e => this.onGetValue(e, 'income')} //or this
                                        selected='Income Level'
                                    />
                                    <MDBSelect
                                        id='education'
                                        options={this.state.educationOptions}
                                        // getValue={e => this.onGetValue(e, 'sex')}
                                        getTextContent={e => this.onGetValue(e, 'education')} //or this
                                        selected='Highest level of Education'
                                    />
                                    <MDBSelect
                                        id='career'
                                        options={this.state.careerOptions}
                                        // getValue={e => this.onGetValue(e, 'sex')}
                                        getTextContent={e => this.onGetValue(e, 'career')} //or this
                                        selected='Current Career Level'
                                    />
                                    <MDBBtn
                                        className='btn btn-info btn-block my-4'
                                        color='blue'
                                        rounded
                                        type='submit'
                                    >
                                        Complete Registration
                  </MDBBtn>
                                </form>

                                <MDBRow className='d-flex align-items-center mb-4 mt-5'>
                                    <MDBCol md='7' className='d-flex justify-content-end'>
                                        <p className='font-small grey-text mt-3'>
                                            Already have an account?
                      <a
                                                href='/login'
                                                className='dark-grey-text ml-1 font-weight-bold'
                                            >
                                                Log In
                      </a>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));

