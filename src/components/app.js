import React, { Component } from 'react';
import Header from './header';
import PreferenceCenter from './PreferenceCenter';

import '../styles/App.scss';

class App extends Component {
  state = {
      pageHeader: "Preference Center",
      url: `http://localhost:8080/api/prefs/593f40e40c4afe500bcb43cb`
      //
  };
  render() {
    console.log();
    return (
      <div className = "App">
        <Header message={this.state.pageHeader}/>
        <PreferenceCenter url={this.state.url} />
      </div>
    )
  }
}

export default App;
