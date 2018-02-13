import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createSighting } from '../actions';

class SightingNew extends Component {
  renderField(field) {
    // Console log the field to see its attributes
    console.log(field);
    return (
      <div>
        <div className="input-field col s12">
          <input type="text" />
          <label htmlFor={field.label}>{field.label}</label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <form style={{ marginLeft: '50px', marginRight: '50px' }}>
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Add new properties to SightingNew
export default reduxForm({
  form: 'SightingNewForm'
})(connect(null, { createSighting })(SightingNew));
