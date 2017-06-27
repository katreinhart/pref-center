import React, { Component } from 'react';
import axios from 'axios';
import { arrayMove } from 'react-sortable-hoc';
import { connect } from 'react-redux';

import PrefItem from './PrefItem';
import UnPrefsList from './UnPrefsList';
import PrefsList from './PrefsList';

import { sortPrefs, importPrefs } from '../actions';

class PreferenceCenter extends Component  {
  constructor(props){
    super(props);
    state: {
      prefsList: []
    };
  }
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
    // this needs updated so that data persists
    this.loadPrefsFromServer();
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      prefsList: arrayMove(this.props.prefsList, oldIndex, newIndex)
    });
    axios.put(this.props.url, {
      "preferences": this.props.prefsList
    });
  }

  render() {
    return(
      <div className="prefs-center">
        <div className="pref-list columns six">
          <PrefsList
            useDragHandle
            onSortEnd = {this.onSortEnd}
          />
        </div>
        <div className="unprefs-list columns six">
          <UnPrefsList />
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
