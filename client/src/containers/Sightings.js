import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchSightings } from '../actions';

class Sightings extends Component {
  componentDidMount() {
    this.props.fetchSightings();
  }

  renderSightings(sightingData) {
    const id = sightingData.id;
    const species = sightingData.species;
    const description = sightingData.description;
    const dateTime = sightingData.dateTime;
    const count = sightingData.count;
    return (
      <tr key={id}>
        <td>{species}</td>
        <td>{description}</td>
        <td>{dateTime}</td>
        <td>{count}</td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Species</th>
            <th>Description</th>
            <th>Date and time</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>{this.props.sightings.map(this.renderSightings)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    sightings: state.sightings
  };
}
export default connect(mapStateToProps, { fetchSightings })(Sightings);
