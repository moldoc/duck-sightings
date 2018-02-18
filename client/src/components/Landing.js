import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>
          Welcome to the duck sighting app.<br/>
          With this app you can either add new duck sightings or list all sightings.<br/>
          Click either of the buttons below to get started!
        </p>

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
