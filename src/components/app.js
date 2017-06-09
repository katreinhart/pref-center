import React, { Component } from 'react';
import Header from './header';
import SortableComponent from './list';

import './App.scss';

class App extends Component {
  state = {
      pageHeader: "Preference Center"
  };
  render() {
    return (
      <div className = "App">
        <Header message={this.state.pageHeader}/>
        <SortableComponent />
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
