import React, { Component } from 'react';
import Header from './header';
import List from './list';

class App extends Component {
  state = {
      pageHeader: "Preference Center"
  };
  render() {
    return (
      <div className = "App">
        <Header message={this.state.pageHeader}/>
        <List />
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
