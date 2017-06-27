import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPref } from '../actions';

class UnPrefsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.unprefs.map((item, index) => {
              return (
                <li className="list-item" key={index}><span onClick={() => this.props.addPref(item)} >+</span> {item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    unprefs: state.unPrefsList
  }
}

export default connect(mapStateToProps, { addPref })(UnPrefsList);
