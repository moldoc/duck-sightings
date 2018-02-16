import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchSightings } from '../actions';

class Sightings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.sightings
    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ data: arrayCopy }, function() {
      this.forceUpdate();
    });
  }

  componentDidMount() {
    this.props.fetchSightings().then(() => {
      this.setState({ data: this.props.sightings });
    });
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
    const rows = this.state.data.map(this.renderSightings);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={() => this.sortBy('species')}>Title</th>
              <th onClick={() => this.sortBy('description')}>Description</th>
              <th onClick={() => this.sortBy('dateTime')}>Date and Time</th>
              <th onClick={() => this.sortBy('count')}>Count</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sightings: state.sightings
  };
}
export default connect(mapStateToProps, { fetchSightings })(Sightings);
