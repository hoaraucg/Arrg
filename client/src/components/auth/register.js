import  React, { Component } from "react"
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBSelect, MDBInput, MDBSelectInput, MDBSelectOption, MDBSelectOptions, MDBCardBody, MDBCard } from "mdbreact";

class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            country: "",
            sex: "",
            race: "",
            ageRange: "",
            political: "",
            relationship: "",
            income: "",
            education: "",
            career: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        // const { name, value } = e.target;
        // this.setState({
        //     [name]: value
        // });
    };
    onSubmit = e => {
        alert(this.state.country)
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            country: this.state.country,
            sex: this.state.sex,
            race: this.state.race,
            ageRange: this.state.ageRange,
            political: this.state.political,
            relationship: this.state.relationship,
            income: this.state.income,
            education: this.state.education,
            career: this.state.career,
        };
        console.log(newUser);
    };
    render() {
        const { errors } = this.state;
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard>
                            <div className="header pt-3 morpheus-den-gradient">
                                <MDBRow className="d-flex justify-content-center">
                                    <h3 className="white-text mb-3 pt-3 font-weight-bold">Sign Up</h3>
                                </MDBRow>
                            </div>

                            <MDBCardBody className="mx-4 mt-4">
                            <form noValidate onSubmit={this.onSubmit}>
                                <MDBInput label="Your name" group type="text" id="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    validate />
                                <MDBInput label="Your email" group type="text" id="email"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    validate />
                                <MDBInput label="Your password" group type="password" id="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    validate
                                    containerClass="mb-0"
                                />
                                <MDBInput label="Re-enter your password" group type="password" id="password2"
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    validate
                                />
                                <MDBSelect type="text" id="country"
                                    onChange={this.onChange}
                                    value={this.state.country}
                                    error={errors.country}
                                    >
                                    <MDBSelectInput selected="Country of Origin"/>
                                    <MDBSelectOptions label="Country" type="text" id="country"
                                    onChange={this.onChange}
                                    value={this.state.country}
                                    error={errors.country}
                                        >
                                        <MDBSelectOption value="">Select your option</MDBSelectOption>
                                        <MDBSelectOption value="Canada">Canada</MDBSelectOption>
                                        <MDBSelectOption value="United States">United States</MDBSelectOption>
                                        <MDBSelectOption value="United Kingdom">United Kingdom</MDBSelectOption>
                                        <MDBSelectOption value="Afghanistan">Afghanistan</MDBSelectOption>
                                        <MDBSelectOption value="Åland Islands">Åland Islands</MDBSelectOption>
                                        <MDBSelectOption value="Albania">Albania</MDBSelectOption>
                                        <MDBSelectOption value="Algeria">Algeria</MDBSelectOption>
                                        <MDBSelectOption value="American Samoa">American Samoa</MDBSelectOption>
                                        <MDBSelectOption value="Andorra">Andorra</MDBSelectOption>
                                        <MDBSelectOption value="Angola">Angola</MDBSelectOption>
                                        <MDBSelectOption value="Anguilla">Anguilla</MDBSelectOption>
                                        <MDBSelectOption value="Antarctica">Antarctica</MDBSelectOption>
                                        <MDBSelectOption value="Antigua and Barbuda">Antigua and Barbuda</MDBSelectOption>
                                        <MDBSelectOption value="Argentina">Argentina</MDBSelectOption>
                                        <MDBSelectOption value="Armenia">Armenia</MDBSelectOption>
                                        <MDBSelectOption value="Aruba">Aruba</MDBSelectOption>
                                        <MDBSelectOption value="Australia">Australia</MDBSelectOption>
                                        <MDBSelectOption value="Austria">Austria</MDBSelectOption>
                                        <MDBSelectOption value="Azerbaijan">Azerbaijan</MDBSelectOption>
                                        <MDBSelectOption value="Bahamas">Bahamas</MDBSelectOption>
                                        <MDBSelectOption value="Bahrain">Bahrain</MDBSelectOption>
                                        <MDBSelectOption value="Bangladesh">Bangladesh</MDBSelectOption>
                                        <MDBSelectOption value="Barbados">Barbados</MDBSelectOption>
                                        <MDBSelectOption value="Belarus">Belarus</MDBSelectOption>
                                        <MDBSelectOption value="Belgium">Belgium</MDBSelectOption>
                                        <MDBSelectOption value="Belize">Belize</MDBSelectOption>
                                        <MDBSelectOption value="Benin">Benin</MDBSelectOption>
                                        <MDBSelectOption value="Bermuda">Bermuda</MDBSelectOption>
                                        <MDBSelectOption value="Bhutan">Bhutan</MDBSelectOption>
                                        <MDBSelectOption value="Bolivia">Bolivia</MDBSelectOption>
                                        <MDBSelectOption value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</MDBSelectOption>
                                        <MDBSelectOption value="Bosnia and Herzegovina">Bosnia and Herzegovina</MDBSelectOption>
                                        <MDBSelectOption value="Botswana">Botswana</MDBSelectOption>
                                        <MDBSelectOption value="Bouvet Island">Bouvet Island</MDBSelectOption>
                                        <MDBSelectOption value="Brazil">Brazil</MDBSelectOption>
                                        <MDBSelectOption value="British Indian Ocean Territory">British Indian Ocean Territory</MDBSelectOption>
                                        <MDBSelectOption value="Brunei Darussalam">Brunei Darussalam</MDBSelectOption>
                                        <MDBSelectOption value="Bulgaria">Bulgaria</MDBSelectOption>
                                        <MDBSelectOption value="Burkina Faso">Burkina Faso</MDBSelectOption>
                                        <MDBSelectOption value="Burundi">Burundi</MDBSelectOption>
                                        <MDBSelectOption value="Cambodia">Cambodia</MDBSelectOption>
                                        <MDBSelectOption value="Cameroon">Cameroon</MDBSelectOption>
                                        <MDBSelectOption value="Cape Verde">Cape Verde</MDBSelectOption>
                                        <MDBSelectOption value="Cayman Islands">Cayman Islands</MDBSelectOption>
                                        <MDBSelectOption value="Central African Republic">Central African Republic</MDBSelectOption>
                                        <MDBSelectOption value="Chad">Chad</MDBSelectOption>
                                        <MDBSelectOption value="Chile">Chile</MDBSelectOption>
                                        <MDBSelectOption value="China">China</MDBSelectOption>
                                        <MDBSelectOption value="Christmas Island">Christmas Island</MDBSelectOption>
                                        <MDBSelectOption value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</MDBSelectOption>
                                        <MDBSelectOption value="Colombia">Colombia</MDBSelectOption>
                                        <MDBSelectOption value="Comoros">Comoros</MDBSelectOption>
                                        <MDBSelectOption value="Congo, Republic of the (Brazzaville)">Congo, Republic of the (Brazzaville)</MDBSelectOption>
                                        <MDBSelectOption value="Congo, the Democratic Republic of the (Kinshasa)">Congo, the Democratic Republic of the (Kinshasa)</MDBSelectOption>
                                        <MDBSelectOption value="Cook Islands">Cook Islands</MDBSelectOption>
                                        <MDBSelectOption value="Costa Rica">Costa Rica</MDBSelectOption>
                                        <MDBSelectOption value="Côte d'Ivoire, Republic of">Côte d'Ivoire, Republic of</MDBSelectOption>
                                        <MDBSelectOption value="Croatia">Croatia</MDBSelectOption>
                                        <MDBSelectOption value="Cuba">Cuba</MDBSelectOption>
                                        <MDBSelectOption value="Curaçao">Curaçao</MDBSelectOption>
                                        <MDBSelectOption value="Cyprus">Cyprus</MDBSelectOption>
                                        <MDBSelectOption value="Czech Republic">Czech Republic</MDBSelectOption>
                                        <MDBSelectOption value="Denmark">Denmark</MDBSelectOption>
                                        <MDBSelectOption value="Djibouti">Djibouti</MDBSelectOption>
                                        <MDBSelectOption value="Dominica">Dominica</MDBSelectOption>
                                        <MDBSelectOption value="Dominican Republic">Dominican Republic</MDBSelectOption>
                                        <MDBSelectOption value="Ecuador">Ecuador</MDBSelectOption>
                                        <MDBSelectOption value="Egypt">Egypt</MDBSelectOption>
                                        <MDBSelectOption value="El Salvador">El Salvador</MDBSelectOption>
                                        <MDBSelectOption value="Equatorial Guinea">Equatorial Guinea</MDBSelectOption>
                                        <MDBSelectOption value="Eritrea">Eritrea</MDBSelectOption>
                                        <MDBSelectOption value="Estonia">Estonia</MDBSelectOption>
                                        <MDBSelectOption value="Ethiopia">Ethiopia</MDBSelectOption>
                                        <MDBSelectOption value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</MDBSelectOption>
                                        <MDBSelectOption value="Faroe Islands">Faroe Islands</MDBSelectOption>
                                        <MDBSelectOption value="Fiji">Fiji</MDBSelectOption>
                                        <MDBSelectOption value="Finland">Finland</MDBSelectOption>
                                        <MDBSelectOption value="France">France</MDBSelectOption>
                                        <MDBSelectOption value="French Guiana">French Guiana</MDBSelectOption>
                                        <MDBSelectOption value="French Polynesia">French Polynesia</MDBSelectOption>
                                        <MDBSelectOption value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</MDBSelectOption>
                                        <MDBSelectOption value="Gabon">Gabon</MDBSelectOption>
                                        <MDBSelectOption value="Gambia, The">Gambia, The</MDBSelectOption>
                                        <MDBSelectOption value="Georgia">Georgia</MDBSelectOption>
                                        <MDBSelectOption value="Germany">Germany</MDBSelectOption>
                                        <MDBSelectOption value="Ghana">Ghana</MDBSelectOption>
                                        <MDBSelectOption value="Gibraltar">Gibraltar</MDBSelectOption>
                                        <MDBSelectOption value="Greece">Greece</MDBSelectOption>
                                        <MDBSelectOption value="Greenland">Greenland</MDBSelectOption>
                                        <MDBSelectOption value="Grenada">Grenada</MDBSelectOption>
                                        <MDBSelectOption value="Guadeloupe">Guadeloupe</MDBSelectOption>
                                        <MDBSelectOption value="Guam">Guam</MDBSelectOption>
                                        <MDBSelectOption value="Guatemala">Guatemala</MDBSelectOption>
                                        <MDBSelectOption value="Guernsey">Guernsey</MDBSelectOption>
                                        <MDBSelectOption value="Guinea">Guinea</MDBSelectOption>
                                        <MDBSelectOption value="Guinea-Bissau">Guinea-Bissau</MDBSelectOption>
                                        <MDBSelectOption value="Guyana">Guyana</MDBSelectOption>
                                        <MDBSelectOption value="Haiti">Haiti</MDBSelectOption>
                                        <MDBSelectOption value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</MDBSelectOption>
                                        <MDBSelectOption value="Holy See (Vatican City)">Holy See (Vatican City)</MDBSelectOption>
                                        <MDBSelectOption value="Honduras">Honduras</MDBSelectOption>
                                        <MDBSelectOption value="Hong Kong">Hong Kong</MDBSelectOption>
                                        <MDBSelectOption value="Hungary">Hungary</MDBSelectOption>
                                        <MDBSelectOption value="Iceland">Iceland</MDBSelectOption>
                                        <MDBSelectOption value="India">India</MDBSelectOption>
                                        <MDBSelectOption value="Indonesia">Indonesia</MDBSelectOption>
                                        <MDBSelectOption value="Iran, Islamic Republic of">Iran, Islamic Republic of</MDBSelectOption>
                                        <MDBSelectOption value="Iraq">Iraq</MDBSelectOption>
                                        <MDBSelectOption value="Ireland">Ireland</MDBSelectOption>
                                        <MDBSelectOption value="Isle of Man">Isle of Man</MDBSelectOption>
                                        <MDBSelectOption value="Israel">Israel</MDBSelectOption>
                                        <MDBSelectOption value="Italy">Italy</MDBSelectOption>
                                        <MDBSelectOption value="Jamaica">Jamaica</MDBSelectOption>
                                        <MDBSelectOption value="Japan">Japan</MDBSelectOption>
                                        <MDBSelectOption value="Jersey">Jersey</MDBSelectOption>
                                        <MDBSelectOption value="Jordan">Jordan</MDBSelectOption>
                                        <MDBSelectOption value="Kazakhstan">Kazakhstan</MDBSelectOption>
                                        <MDBSelectOption value="Kenya">Kenya</MDBSelectOption>
                                        <MDBSelectOption value="Kiribati">Kiribati</MDBSelectOption>
                                        <MDBSelectOption value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</MDBSelectOption>
                                        <MDBSelectOption value="Korea, Republic of">Korea, Republic of</MDBSelectOption>
                                        <MDBSelectOption value="Kuwait">Kuwait</MDBSelectOption>
                                        <MDBSelectOption value="Kyrgyzstan">Kyrgyzstan</MDBSelectOption>
                                        <MDBSelectOption value="Laos">Laos</MDBSelectOption>
                                        <MDBSelectOption value="Latvia">Latvia</MDBSelectOption>
                                        <MDBSelectOption value="Lebanon">Lebanon</MDBSelectOption>
                                        <MDBSelectOption value="Lesotho">Lesotho</MDBSelectOption>
                                        <MDBSelectOption value="Liberia">Liberia</MDBSelectOption>
                                        <MDBSelectOption value="Libya">Libya</MDBSelectOption>
                                        <MDBSelectOption value="Liechtenstein">Liechtenstein</MDBSelectOption>
                                        <MDBSelectOption value="Lithuania">Lithuania</MDBSelectOption>
                                        <MDBSelectOption value="Luxembourg">Luxembourg</MDBSelectOption>
                                        <MDBSelectOption value="Macao">Macao</MDBSelectOption>
                                        <MDBSelectOption value="Macedonia, Republic of">Macedonia, Republic of</MDBSelectOption>
                                        <MDBSelectOption value="Madagascar">Madagascar</MDBSelectOption>
                                        <MDBSelectOption value="Malawi">Malawi</MDBSelectOption>
                                        <MDBSelectOption value="Malaysia">Malaysia</MDBSelectOption>
                                        <MDBSelectOption value="Maldives">Maldives</MDBSelectOption>
                                        <MDBSelectOption value="Mali">Mali</MDBSelectOption>
                                        <MDBSelectOption value="Malta">Malta</MDBSelectOption>
                                        <MDBSelectOption value="Marshall Islands">Marshall Islands</MDBSelectOption>
                                        <MDBSelectOption value="Martinique">Martinique</MDBSelectOption>
                                        <MDBSelectOption value="Mauritania">Mauritania</MDBSelectOption>
                                        <MDBSelectOption value="Mauritius">Mauritius</MDBSelectOption>
                                        <MDBSelectOption value="Mayotte">Mayotte</MDBSelectOption>
                                        <MDBSelectOption value="Mexico">Mexico</MDBSelectOption>
                                        <MDBSelectOption value="Micronesia, Federated States of">Micronesia, Federated States of</MDBSelectOption>
                                        <MDBSelectOption value="Moldova">Moldova</MDBSelectOption>
                                        <MDBSelectOption value="Monaco">Monaco</MDBSelectOption>
                                        <MDBSelectOption value="Mongolia">Mongolia</MDBSelectOption>
                                        <MDBSelectOption value="Montenegro">Montenegro</MDBSelectOption>
                                        <MDBSelectOption value="Montserrat">Montserrat</MDBSelectOption>
                                        <MDBSelectOption value="Morocco">Morocco</MDBSelectOption>
                                        <MDBSelectOption value="Mozambique">Mozambique</MDBSelectOption>
                                        <MDBSelectOption value="Myanmar">Myanmar</MDBSelectOption>
                                        <MDBSelectOption value="Namibia">Namibia</MDBSelectOption>
                                        <MDBSelectOption value="Nauru">Nauru</MDBSelectOption>
                                        <MDBSelectOption value="Nepal">Nepal</MDBSelectOption>
                                        <MDBSelectOption value="Netherlands">Netherlands</MDBSelectOption>
                                        <MDBSelectOption value="New Caledonia">New Caledonia</MDBSelectOption>
                                        <MDBSelectOption value="New Zealand">New Zealand</MDBSelectOption>
                                        <MDBSelectOption value="Nicaragua">Nicaragua</MDBSelectOption>
                                        <MDBSelectOption value="Niger">Niger</MDBSelectOption>
                                        <MDBSelectOption value="Nigeria">Nigeria</MDBSelectOption>
                                        <MDBSelectOption value="Niue">Niue</MDBSelectOption>
                                        <MDBSelectOption value="Norfolk Island">Norfolk Island</MDBSelectOption>
                                        <MDBSelectOption value="Northern Mariana Islands">Northern Mariana Islands</MDBSelectOption>
                                        <MDBSelectOption value="Norway">Norway</MDBSelectOption>
                                        <MDBSelectOption value="Oman">Oman</MDBSelectOption>
                                        <MDBSelectOption value="Pakistan">Pakistan</MDBSelectOption>
                                        <MDBSelectOption value="Palau">Palau</MDBSelectOption>
                                        <MDBSelectOption value="Palestine, State of">Palestine, State of</MDBSelectOption>
                                        <MDBSelectOption value="Panama">Panama</MDBSelectOption>
                                        <MDBSelectOption value="Papua New Guinea">Papua New Guinea</MDBSelectOption>
                                        <MDBSelectOption value="Paraguay">Paraguay</MDBSelectOption>
                                        <MDBSelectOption value="Peru">Peru</MDBSelectOption>
                                        <MDBSelectOption value="Philippines">Philippines</MDBSelectOption>
                                        <MDBSelectOption value="Pitcairn">Pitcairn</MDBSelectOption>
                                        <MDBSelectOption value="Poland">Poland</MDBSelectOption>
                                        <MDBSelectOption value="Portugal">Portugal</MDBSelectOption>
                                        <MDBSelectOption value="Puerto Rico">Puerto Rico</MDBSelectOption>
                                        <MDBSelectOption value="Qatar">Qatar</MDBSelectOption>
                                        <MDBSelectOption value="Réunion">Réunion</MDBSelectOption>
                                        <MDBSelectOption value="Romania">Romania</MDBSelectOption>
                                        <MDBSelectOption value="Russian Federation">Russian Federation</MDBSelectOption>
                                        <MDBSelectOption value="Rwanda">Rwanda</MDBSelectOption>
                                        <MDBSelectOption value="Saint Barthélemy">Saint Barthélemy</MDBSelectOption>
                                        <MDBSelectOption value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</MDBSelectOption>
                                        <MDBSelectOption value="Saint Kitts and Nevis">Saint Kitts and Nevis</MDBSelectOption>
                                        <MDBSelectOption value="Saint Lucia">Saint Lucia</MDBSelectOption>
                                        <MDBSelectOption value="Saint Martin">Saint Martin</MDBSelectOption>
                                        <MDBSelectOption value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</MDBSelectOption>
                                        <MDBSelectOption value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</MDBSelectOption>
                                        <MDBSelectOption value="Samoa">Samoa</MDBSelectOption>
                                        <MDBSelectOption value="San Marino">San Marino</MDBSelectOption>
                                        <MDBSelectOption value="Sao Tome and Principe">Sao Tome and Principe</MDBSelectOption>
                                        <MDBSelectOption value="Saudi Arabia">Saudi Arabia</MDBSelectOption>
                                        <MDBSelectOption value="Senegal">Senegal</MDBSelectOption>
                                        <MDBSelectOption value="Serbia">Serbia</MDBSelectOption>
                                        <MDBSelectOption value="Seychelles">Seychelles</MDBSelectOption>
                                        <MDBSelectOption value="Sierra Leone">Sierra Leone</MDBSelectOption>
                                        <MDBSelectOption value="Singapore">Singapore</MDBSelectOption>
                                        <MDBSelectOption value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</MDBSelectOption>
                                        <MDBSelectOption value="Slovakia">Slovakia</MDBSelectOption>
                                        <MDBSelectOption value="Slovenia">Slovenia</MDBSelectOption>
                                        <MDBSelectOption value="Solomon Islands">Solomon Islands</MDBSelectOption>
                                        <MDBSelectOption value="Somalia">Somalia</MDBSelectOption>
                                        <MDBSelectOption value="South Africa">South Africa</MDBSelectOption>
                                        <MDBSelectOption value="South Georgia and South Sandwich Islands">South Georgia and South Sandwich Islands</MDBSelectOption>
                                        <MDBSelectOption value="South Sudan">South Sudan</MDBSelectOption>
                                        <MDBSelectOption value="Spain">Spain</MDBSelectOption>
                                        <MDBSelectOption value="Sri Lanka">Sri Lanka</MDBSelectOption>
                                        <MDBSelectOption value="Sudan">Sudan</MDBSelectOption>
                                        <MDBSelectOption value="Suriname">Suriname</MDBSelectOption>
                                        <MDBSelectOption value="Swaziland">Swaziland</MDBSelectOption>
                                        <MDBSelectOption value="Sweden">Sweden</MDBSelectOption>
                                        <MDBSelectOption value="Switzerland">Switzerland</MDBSelectOption>
                                        <MDBSelectOption value="Syrian Arab Republic">Syrian Arab Republic</MDBSelectOption>
                                        <MDBSelectOption value="Taiwan">Taiwan</MDBSelectOption>
                                        <MDBSelectOption value="Tajikistan">Tajikistan</MDBSelectOption>
                                        <MDBSelectOption value="Tanzania, United Republic of">Tanzania, United Republic of</MDBSelectOption>
                                        <MDBSelectOption value="Thailand">Thailand</MDBSelectOption>
                                        <MDBSelectOption value="Timor-Leste">Timor-Leste</MDBSelectOption>
                                        <MDBSelectOption value="Togo">Togo</MDBSelectOption>
                                        <MDBSelectOption value="Tokelau">Tokelau</MDBSelectOption>
                                        <MDBSelectOption value="Tonga">Tonga</MDBSelectOption>
                                        <MDBSelectOption value="Trinidad and Tobago">Trinidad and Tobago</MDBSelectOption>
                                        <MDBSelectOption value="Tunisia">Tunisia</MDBSelectOption>
                                        <MDBSelectOption value="Turkey">Turkey</MDBSelectOption>
                                        <MDBSelectOption value="Turkmenistan">Turkmenistan</MDBSelectOption>
                                        <MDBSelectOption value="Turks and Caicos Islands">Turks and Caicos Islands</MDBSelectOption>
                                        <MDBSelectOption value="Tuvalu">Tuvalu</MDBSelectOption>
                                        <MDBSelectOption value="Uganda">Uganda</MDBSelectOption>
                                        <MDBSelectOption value="Ukraine">Ukraine</MDBSelectOption>
                                        <MDBSelectOption value="United Arab Emirates">United Arab Emirates</MDBSelectOption>
                                        <MDBSelectOption value="United States Minor Outlying Islands">United States Minor Outlying Islands</MDBSelectOption>
                                        <MDBSelectOption value="Uruguay">Uruguay</MDBSelectOption>
                                        <MDBSelectOption value="Uzbekistan">Uzbekistan</MDBSelectOption>
                                        <MDBSelectOption value="Vanuatu">Vanuatu</MDBSelectOption>
                                        <MDBSelectOption value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</MDBSelectOption>
                                        <MDBSelectOption value="Vietnam">Vietnam</MDBSelectOption>
                                        <MDBSelectOption value="Virgin Islands, British">Virgin Islands, British</MDBSelectOption>
                                        <MDBSelectOption value="Virgin Islands, U.S.">Virgin Islands, U.S.</MDBSelectOption>
                                        <MDBSelectOption value="Wallis and Futuna">Wallis and Futuna</MDBSelectOption>
                                        <MDBSelectOption value="Western Sahara">Western Sahara</MDBSelectOption>
                                        <MDBSelectOption value="Yemen">Yemen</MDBSelectOption>
                                        <MDBSelectOption value="Zambia">Zambia</MDBSelectOption>
                                        <MDBSelectOption value="Zimbabwe">Zimbabwe</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>


                                <MDBSelect>
                                    <MDBSelectInput selected="Sex" />
                                    <MDBSelectOptions label="Sex"
                                        onChange={this.onChange}
                                        value={this.state.sex}
                                        error={errors.sex}
                                        >
                                        <MDBSelectOption value="1">Male</MDBSelectOption>
                                        <MDBSelectOption value="2">Female</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>


                                <MDBSelect>
                                    <MDBSelectInput selected="Race" />
                                    <MDBSelectOptions label="Race"
                                        onChange={this.onChange}
                                        value={this.state.race}
                                        error={errors.race}
                                        >
                                        <MDBSelectOption value="1">American Indian or Alaska Native</MDBSelectOption>
                                        <MDBSelectOption value="2">Asian</MDBSelectOption>
                                        <MDBSelectOption value="3">Black or African American</MDBSelectOption>
                                        <MDBSelectOption value="4">Native Hawaiian or Other Pacific Islander</MDBSelectOption>
                                        <MDBSelectOption value="5">White</MDBSelectOption>
                                        <MDBSelectOption value="6">Hispanic or Latino</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>


                                <MDBSelect>
                                    <MDBSelectInput selected="Age Range" />
                                    <MDBSelectOptions label="Age Range"
                                        onChange={this.onChange}
                                        value={this.state.ageRange}
                                        error={errors.ageRange}
                                        >
                                        <MDBSelectOption value="1">Under 18</MDBSelectOption>
                                        <MDBSelectOption value="2">18-24</MDBSelectOption>
                                        <MDBSelectOption value="3">25-32</MDBSelectOption>
                                        <MDBSelectOption value="4">33-40</MDBSelectOption>
                                        <MDBSelectOption value="5">41-50</MDBSelectOption>
                                        <MDBSelectOption value="6">50 +</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>



                                <MDBSelect>
                                    <MDBSelectInput selected="Political Affiliation" />
                                    <MDBSelectOptions label="Political Affiliation"
                                        onChange={this.onChange}
                                        value={this.state.political}
                                        error={errors.political}
                                        >
                                        <MDBSelectOption value="1">Republican</MDBSelectOption>
                                        <MDBSelectOption value="2">Democrat</MDBSelectOption>
                                        <MDBSelectOption value="3">Libertarian</MDBSelectOption>
                                        <MDBSelectOption value="4">Green</MDBSelectOption>
                                        <MDBSelectOption value="5">Other</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>


                                <MDBSelect>
                                    <MDBSelectInput selected="Relationship Status" />
                                    <MDBSelectOptions label="Relationship Status"
                                        onChange={this.onChange}
                                        value={this.state.relationship}
                                        error={errors.relationship}
                                        >
                                        <MDBSelectOption value="1">Single</MDBSelectOption>
                                        <MDBSelectOption value="2">Significant Other</MDBSelectOption>
                                        <MDBSelectOption value="3">Married</MDBSelectOption>
                                        <MDBSelectOption value="4">Divorced</MDBSelectOption>
                                        <MDBSelectOption value="5">Partnered (Same-Sex)</MDBSelectOption>
                                        <MDBSelectOption value="6">Dispartnered (Same-Sex)</MDBSelectOption>
                                        <MDBSelectOption value="7">Widowed</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>

                                <MDBSelect>
                                    <MDBSelectInput selected="Annual Income Level" />
                                    <MDBSelectOptions label="Annual Income Level"
                                        onChange={this.onChange}
                                        value={this.state.income}
                                        error={errors.income}
                                        >
                                        <MDBSelectOption value="1">Less than 20,000 Annually</MDBSelectOption>
                                        <MDBSelectOption value="2">20,000 - 40,000</MDBSelectOption>
                                        <MDBSelectOption value="3">40,000 - 70,000</MDBSelectOption>
                                        <MDBSelectOption value="4">70,000 - 100,000</MDBSelectOption>
                                        <MDBSelectOption value="5">100,000 - 150,000</MDBSelectOption>
                                        <MDBSelectOption value="6">More than 150,000</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>


                                <MDBSelect>
                                    <MDBSelectInput selected="Education" />
                                    <MDBSelectOptions label="Education"
                                        onChange={this.onChange}
                                        value={this.state.education}
                                        error={errors.education}
                                        >
                                        <MDBSelectOption value="1">High School</MDBSelectOption>
                                        <MDBSelectOption value="2">Some College</MDBSelectOption>
                                        <MDBSelectOption value="3">Associate's Degree</MDBSelectOption>
                                        <MDBSelectOption value="4">Bachelor's Degree</MDBSelectOption>
                                        <MDBSelectOption value="5">Master's Degree</MDBSelectOption>
                                        <MDBSelectOption value="6">Certification</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>


                                <MDBSelect>
                                    <MDBSelectInput selected="Career Level" />
                                    <MDBSelectOptions label="Career Level"
                                        onChange={this.onChange}
                                        value={this.state.career}
                                        error={errors.career}
                                        >
                                        <MDBSelectOption value="1">Entry Level</MDBSelectOption>
                                        <MDBSelectOption value="2">Supervisor</MDBSelectOption>
                                        <MDBSelectOption value="3">Manager</MDBSelectOption>
                                        <MDBSelectOption value="4">Regional Head</MDBSelectOption>
                                        <MDBSelectOption value="5">CXO</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>

                                <MDBBtn
                                    className="btn btn-info btn-block my-4"
                                    color="blue"
                                    rounded
                                    type="submit"
                                >
                                    Complete Registration
                                    </MDBBtn>
                                    </form>

                                <MDBRow className="d-flex align-items-center mb-4 mt-5">
                                    <MDBCol md="7" className="d-flex justify-content-end">
                                        <p className="font-small grey-text mt-3">Already have an account?<a href="/login" className="dark-grey-text ml-1 font-weight-bold">
                                            Log In</a>
                                        </p>
                                    </MDBCol>



                                </MDBRow>

                            </MDBCardBody >
                        </MDBCard >
                    </MDBCol >
                </MDBRow >
            </MDBContainer >
        );
    };
}


export default RegisterPage;