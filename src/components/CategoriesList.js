import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPref } from '../actions';

class CategoriesList extends Component {
  render() {
    return (
      <div>
        <ul className="cats-list">
          {
            this.props.categories.map((item, index) => {
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
    categories: state.categoriesList
  }
}

export default connect(mapStateToProps, { addPref })(CategoriesList);
