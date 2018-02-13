import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Sightings from './Sightings';
import SightingNew from './SightingNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchSightings();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/sightings" component={Sightings} />
            <Route path="/sightings/new" component={SightingNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
