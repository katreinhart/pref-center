import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPref } from '../actions';

class CategoriesList extends Component {
  render() {
    return (
      <div>
        <ul className="cats-list" role="category-list">
          {
            this.props.categories.map((item, index) => {
              return (
                <li className="list-item un" key={index} role="category-item">
                  <span
                    tabIndex = "0"
                    onKeyPress={(event) => {
                      if(event.which === 32 || event.which === 13)
                        this.props.addPref(item);
                    }}
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
