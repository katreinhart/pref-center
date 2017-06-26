import React, { Component } from 'react';
import axios from 'axios';
import { arrayMove } from 'react-sortable-hoc';

import PrefItem from './PrefItem';
import UnPrefsList from './UnPrefsList';
import PrefsList from './PrefsList';

class PreferenceCenter extends Component  {
  state = {
    url: `http://localhost:8080/api/prefs/${this.props.customerID}`,
    items: []
  }

  loadPrefsFromServer(){
    axios.get(this.state.url)
      .then(res => {
        if(res.data.preferences) {
          this.setState({
            items: res.data.preferences
          })
        }
      }).catch(err => {
        console.error(err);
      });
  }

  componentDidMount () {
    this.loadPrefsFromServer();
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
    axios.put(this.state.url, {
      "preferences": this.state.items
    });
  }

  render() {
    return(
      <div className="prefs-center">
        <div className="pref-list columns six">
          <PrefsList
            items = {this.state.items}
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

PreferenceCenter.propTypes = {
  customerID: React.PropTypes.string
}

export default PreferenceCenter;
