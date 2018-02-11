import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Welcome to the duck sighting app.</p>
        <a
          style={{ marginRight: '20px' }}
          className="waves-effect waves-light btn"
        >
          Add a sighting
        </a>
        <Link to={'/sightings'} className="waves-effect waves-light btn">
          List sightings
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ sightings }) {
  return { sightings };
}
export default connect(mapStateToProps)(Landing);
