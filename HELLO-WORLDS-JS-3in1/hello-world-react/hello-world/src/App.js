import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="Appp-logo">
            <code >Hello World with ReactJS </code> 
          </h2>
          <a className="App-link" href="https://acolab.it" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </header>
      </div>
    );
  }
}
export default App;