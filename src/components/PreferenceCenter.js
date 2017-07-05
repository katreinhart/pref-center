import React, { Component } from 'react';
import axios from 'axios';
import { arrayMove } from 'react-sortable-hoc';
import { connect } from 'react-redux';

import PrefItem from './PrefItem';
import CategoriesList from './CategoriesList';
import PrefsList from './PrefsList';

import { sortPrefs, importPrefs } from '../actions';

class PreferenceCenter extends Component  {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  loadPrefsFromServer () {
    axios.get(this.props.url)
      .then(res => {
        if(res.data.preferences) {
          this.props.importPrefs(res.data.preferences);
          this.setState({
            name: res.data.userName
          });
        }
      }).catch(err => {
        console.error(err);
      });
  }

  componentDidMount () {
    this.loadPrefsFromServer();
  }

  componentDidUpdate() {
    axios.put(this.props.url, {
      "preferences": this.props.prefsList
    })
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.sortPrefs(arrayMove(this.props.prefsList, oldIndex, newIndex));
  }

  render() {
    return(
      <div className="prefs-center">
        <div className="row">
          {
            this.state.name !== "" ?
              <p>Welcome back, {this.state.name}!</p>
            :
              <p></p>
          }
        </div>
        <div className="row"><p>Help us show you what you want to see on your homepage! You can add, remove, and re-order your preferences here.</p></div>
        <div className="row">
          <div className="pref-list columns six">
            <h4>My Categories</h4>
            <p>Things you want to see! <em>Click & drag the</em> &#9776; <em>handle to reorder.</em></p>
            <PrefsList
              useDragHandle
              onSortEnd = {this.onSortEnd}
            />
          </div>
          <div className="cats-list columns six">
            <h4>Category Choices</h4>
            <p>Choose what you'd like to see from here!</p>
            <CategoriesList />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    prefsList: state.prefsList
  }
}

export default connect(mapStateToProps, { sortPrefs, importPrefs })(PreferenceCenter);
