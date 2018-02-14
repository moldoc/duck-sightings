import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSighting } from '../actions';

class SightingNew extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );
  }

  // Return user back to the root after a successfull add of a new sighting
  onSubmit(values) {
    this.props.createSighting(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // Pull handleSubmit given by redux to customize what happens when
    // the form is submitted
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
          label="Date and time"
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

// Add new properties to SightingNew and allow redux form to communicate
// from the component to the reducer
export default reduxForm({
  form: 'SightingNewForm'
})(connect(null, { createSighting })(SightingNew));
