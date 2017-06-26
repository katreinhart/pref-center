import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnPrefsList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="list-item">one</li>
          <li className="list-item">two</li>
          <li className="list-item">four</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    unprefs: state.unprefs
  }
}

export default connect(mapStateToProps, null)(UnPrefsList);
