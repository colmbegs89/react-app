import React, { Component } from 'react';
import logo from './logo.svg';
import derrylogo from './dcsdc.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header col-md-12">
          <div className='row col-md-12'>
          <img src={derrylogo} className="Council-logo col-md-3" alt="logo" />
          <img src={logo} className="App-logo col-md-4 offset-md-5" alt="logo" />
          </div>
          <div className='row col-md-12'>
          <h1 className="App-title">Welcome to React</h1>
          </div>
        </header>
        <p className="App-intro">
          Basic React Application <code>src/App.js</code>.
        </p>
      </div>
    );
  }
}

export default App;
