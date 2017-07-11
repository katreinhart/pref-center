import React, { Component } from 'react';
import Header from './header';
import PreferenceCenter from './PreferenceCenter';

import '../styles/App.scss';

class App extends Component {
  state = {
      pageHeader: "Preference Center",
      url: `${API_HOST}/api/prefs/593f37daaf06a249f51fa649`
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
