import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePref } from '../actions';

import '../styles/PrefItem.scss';

class PrefItem extends Component {
  render() {
    return(
      <div className="pref-item"><span onClick={() => {this.props.removePref(this.props.value)}}>x</span> {this.props.value}</div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, { removePref })(PrefItem);