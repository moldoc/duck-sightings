import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createSighting, fetchSpecies } from '../actions';

// Array that will get all the species names so that they can be referred to
// in the validation function
let speciesArray = [];

class SightingNew extends Component {
  componentDidMount() {
    this.props.fetchSpecies();
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  // Return user back to the root after a successful add of a new sighting
  onSubmit(values) {
    this.props.createSighting(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // Pull handleSubmit given by redux to customize what happens when
    // the form is submitted
    speciesArray = this.props.species;
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        style={{ marginLeft: '50px', marginRight: '50px', marginTop: '10px' }}
      >
        <Field label="Species" name="species" component={this.renderField} />
        <Field
          label="Description"
          name="description"
          component={this.renderField}
        />
        <Field
          label="Date and time (DD.MM.YY HH:II)"
          name="dateTime"
          component={this.renderField}
        />
        <Field label="Count" name="count" component={this.renderField} />
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
        </button>
      </form>
    );
  }
}

// Function for checking that the given species name exists in the
// species array
function checkSpeciesName(species) {
  let result = function(element) {
    return element.name === species;
  };

  return speciesArray.some(result);
}

function validate(values) {
  const errors = {};

  if (!values.species) {
    errors.species = 'Enter a species!';
  }

  // Only check the species array after it has received the elements
  if (speciesArray[0] !== undefined) {
    if (!checkSpeciesName(values.species)) {
      errors.species = 'Not a proper species!';
    }
  }

  if (!values.description) {
    errors.description = 'Enter a description!';
  }
  if (!values.dateTime) {
    errors.dateTime = 'Enter a date and a time!';
  }

  const dateTimeRegex = /^(([0-2]?[0-9]|3[0-1])[.]([0]?[1-9]|1[0-2])[.][1-2]\d{3}) (20|21|22|23|[0-1]?\d{1}):([0-5]?\d{1})$/;

  if (!dateTimeRegex.exec(values.dateTime)) {
    errors.dateTime = 'Not a proper date time!';
  }
  if (!values.count) {
    errors.count = 'Enter a count!';
  }
  if (!parseInt(values.count)) {
    errors.count = 'Count must be a number!';
  }

  // If errors empty, form is ready for submit
  return errors;
}

function mapStateToProps(state) {
  return {
    species: state.species
  };
}

// Add new properties to SightingNew and allow redux form to communicate
// from the component to the reducer
export default reduxForm({
  validate,
  form: 'SightingNewForm'
})(connect(mapStateToProps, { createSighting, fetchSpecies })(SightingNew));
