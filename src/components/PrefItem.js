import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePref } from '../actions';

class PrefItem extends Component {
  render() {
    return(
      <div className="pref-item"><span
        className="remove-button" tabIndex = "0"
        onKeyPress={(event) => {
          if(event.which === 32 || event.which === 13)
            this.props.removePref(this.props.value);
        }}
        onClick={() => {this.props.removePref(this.props.value)}}
        >	&#x2715;</span>{' '}{this.props.value}</div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, { removePref })(PrefItem);
