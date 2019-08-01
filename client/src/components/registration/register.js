import CountryDropdown from 'react-country-region-selector';
import React from "react"

const RegisterPage = () => {
    return (
        <form class="border border-light p-5">

    <p class="h4 mb-4 text-center">Fill out the form to continue</p>

    <CountryDropdown
  value={country}
  onChange={selectCountry}
  priorityOptions={["CA", "US", "GB"]} />


    <select class="browser-default custom-select mb-4" id="sex">
        <option value="" disabled="" selected="">Sex</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
    </select>

    <select class="browser-default custom-select mb-4" id="race">
        <option value="" disabled="" selected="">Race</option>
        <option value="1">American Indian or Alaska Native</option>
        <option value="2">Asian</option>
        <option value="3">Black or African American</option>
        <option value="4">Native Hawaiian or Other Pacific Islander</option>
        <option value="5">White</option>
        <option value="6">Hispanic or Latino</option>
    </select>

    <select class="browser-default custom-select mb-4" id="age">
        <option value="" disabled="" selected="">Age Range</option>
        <option value="1">Under 18</option>
        <option value="2">18-24</option>
        <option value="3">25-32</option>
        <option value="4">33-40</option>
        <option value="5">41-50</option>
        <option value="6">50 +</option>
    </select>

    <select class="browser-default custom-select mb-4" id="political">
        <option value="" disabled="" selected="">Political Affiliation</option>
        <option value="1">Republican</option>
        <option value="2">Democrat</option>
        <option value="3">Libertarian</option>
        <option value="4">Green</option>
        <option value="5">Other</option>
    </select>

    <select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected="">Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>

    <select class="browser-default custom-select mb-4" id="relationship">
        <option value="" disabled="" selected="">Relationship Status</option>
        <option value="1">Single</option>
        <option value="2">Significant Other</option>
        <option value="3">Married</option>
        <option value="4">Divorced</option>
        <option value="5">Partnered (Same-Sex)</option>
        <option value="6">Dispartnered (Same-Sex)</option>
        <option value="7">Widowed</option>
    </select>

    <select class="browser-default custom-select mb-4" id="income">
        <option value="" disabled="" selected="">Income Level</option>
        <option value="1">Less than 20,000 Annually</option>
        <option value="2">20,000 - 40,000</option>
        <option value="3">40,000 - 70,000</option>
        <option value="4">70,000 - 100,000</option>
        <option value="5">100,000 - 150,000</option>
        <option value="6">More than 150,000</option>
    </select>

    <select class="browser-default custom-select mb-4" id="education">
        <option value="" disabled="" selected="">Education</option>
        <option value="1">High School</option>
        <option value="2">Some College</option>
        <option value="3">Associate's Degree</option>
        <option value="4">Bachelor's Degree</option>
        <option value="5">Master's Degree</option>
        <option value="6">Certification</option>
    </select>

    <select class="browser-default custom-select mb-4" id="career">
        <option value="" disabled="" selected="">Career Level</option>
        <option value="1">Entry Level</option>
        <option value="2">Supervisor</option>
        <option value="3">Manager</option>
        <option value="4">Regional Head</option>
        <option value="5">CXO</option>
    </select>


    <button class="btn btn-info btn-block my-4" type="submit">Complete Registration</button>

</form>
    );
};

export default RegisterPage;