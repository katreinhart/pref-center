import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPref } from '../actions';

class UnPrefsList extends Component {
  // addPref(item) {
  //   console.log("Adding pref", item);
  // }
  render() {
    console.log('this.props.unprefs', this.props.unprefs);
    return (
      <div>
        <ul>
          {
            this.props.unprefs.map((item, index) => {
              return (
                <li className="list-item" key={index}><span onClick={(item) => addPref(item)} >+</span> {item}</li>
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

export default connect(mapStateToProps, null)(UnPrefsList);
