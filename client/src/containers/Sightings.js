import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSightings } from '../actions';

class Sightings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sightings: this.props.sightings
    };

    this.compareDates.bind(this);
    this.sortDates.bind(this);
  }

  componentDidMount() {
    // After the component has mounted, fetch the sightings and update
    // state in case the user added new sightings
    this.props.fetchSightings().then(() => {
      this.setState({ sightings: this.props.sightings });
    });
  }

  compareDates() {
    return function(a, b) {
      if (a['dateTime'] < b['dateTime']) return -1;
      if (a['dateTime'] > b['dateTime']) return 1;
      return 0;
    };
  }

  // Asceding is a boolean that determines whether the sightings will be given
  // in descending or ascending order by date
  sortDates(ascending) {
    let arrayCopy = [...this.state.sightings];
    arrayCopy.sort(this.compareDates());
    if (!ascending) {
      arrayCopy.reverse();
    }
    this.setState({ sightings: arrayCopy }, () => {
      this.forceUpdate();
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
    const rows = this.state.sightings.map(this.renderSightings);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Species</th>
              <th>Description</th>
              <th>
                Date and Time<a onClick={() => this.sortDates(true)}>
                  <i className="material-icons">arrow_drop_up</i>
                </a>
                <a onClick={() => this.sortDates(false)}>
                  <i className="material-icons">arrow_drop_down</i>
                </a>
              </th>
              <th>Count</th>
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
