import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchSightings } from '../actions';

class Sightings extends Component {
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
    // For every sighting id, return its description in a list
    //return _.map(this.props.sightings, sighting => {
    //  return (
    //    <li key={sighting.id}>
    //      <p>{sighting.description}</p>
    //    </li>
    //  );
    //  });
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
      //<div style={{ textAlign: 'center' }}>
      //<h3>Havainnot</h3>
      //<ul>{this.renderSightings()}</ul>
      //</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sightings: state.sightings
  };
}
export default connect(mapStateToProps, { fetchSightings })(Sightings);
