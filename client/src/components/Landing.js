import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Welcome to the duck sighting app.</p>
        <Link
          to={'/sightings/new'}
          style={{ marginRight: '20px' }}
          className="waves-effect waves-light btn"
        >
          Add a sighting
        </Link>
        <Link to={'/sightings'} className="waves-effect waves-light btn">
          List sightings
        </Link>
      </div>
    );
  }
}
