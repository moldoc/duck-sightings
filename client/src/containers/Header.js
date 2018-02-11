import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo center">
            Duck Sightings
          </Link>
        </div>
      </nav>
    );
  }
}
