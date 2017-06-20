import React, { Component } from 'react';
import Header from './header';
// import SortableComponent from './list';
import PreferenceCenter from './PreferenceCenter';

import '../styles/App.scss';

class App extends Component {
  state = {
      pageHeader: "Preference Center"
  };
  render() {
    return (
      <div className = "App">
        <Header message={this.state.pageHeader}/>
        <PreferenceCenter  />
      </div>
    )
  }
}

App.propTypes = {
  message: React.PropTypes.string
}

App.defaultProps = {
  message: 'Hello!'
}

export default App;
