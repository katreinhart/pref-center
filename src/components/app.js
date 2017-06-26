import React, { Component } from 'react';
import Header from './header';
import PreferenceCenter from './PreferenceCenter';

import '../styles/App.scss';

class App extends Component {
  state = {
      pageHeader: "Preference Center",
      customerID: '593f40e40c4afe500bcb43cb'
      //
  };
  render() {
    console.log();
    return (
      <div className = "App">
        <Header message={this.state.pageHeader}/>
        <PreferenceCenter customerID={this.state.customerID} />
      </div>
    )
  }
}

export default App;
