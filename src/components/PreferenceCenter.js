import React, { Component } from 'react';
import axios from 'axios';
import { arrayMove } from 'react-sortable-hoc';
import { connect } from 'react-redux';

import PrefItem from './PrefItem';
import UnPrefsList from './UnPrefsList';
import PrefsList from './PrefsList';

import { sortPrefs, importPrefs } from '../actions';

class PreferenceCenter extends Component  {

  loadPrefsFromServer () {
    axios.get(this.props.url)
      .then(res => {
        if(res.data.preferences) {
          this.props.importPrefs(res.data.preferences);
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
        <div className="row"><p>Help us show you what you want to see on your homepage! You can add, remove, and re-order your preferences here.</p></div>
        <div className="row">
          <div className="pref-list columns six">
            <h4>Things I want to see</h4>
            <PrefsList
              useDragHandle
              onSortEnd = {this.onSortEnd}
            />
          </div>
          <div className="unprefs-list columns six">
            <h4>Things I don't need to see</h4>
            <UnPrefsList />
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
