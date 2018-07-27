import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TravelContainer from './components/containers/TravelContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TravelContainer />
      </div>
    );
  }
}

export default App;
