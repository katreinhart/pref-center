import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPref } from '../actions';

class UnPrefsList extends Component {
  render() {
    return (
      <div>
        <ul className="unprefs-list">
          {
            this.props.unprefs.map((item, index) => {
              return (
                <li className="list-item un" key={index}>
                  <span
                    onClick={() => this.props.addPref(item)}
                    className="add-button"
                    >&#x2795;</span> {item}</li>
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
