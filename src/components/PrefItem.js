import React, { Component } from 'react';

import '../styles/PrefItem.scss';

class PrefItem extends Component {
  render() {
    return(
      <div className="pref-item">{this.props.value}</div>
    )
  }
}

export default PrefItem;
