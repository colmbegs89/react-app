import React, { Component } from 'react'
import logo from '../img/logo.svg'
import derrylogo from '../img/dcsdc.png'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header '>
          <div className='row col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <img src={derrylogo} className='Council-logo col-4 col-xs-6 col-sm-3 col-md-3 col-lg-3' alt='logo' />
            <div className='col-xs-0 col-sm-0 col-md-6 col-lg-6'/>
            <img src={logo} className='App-logo col-xs-6 col-sm-3 col-md-3 col-lg-3' alt='logo' />
            </div>
            <div className='row col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <h1 className='App-title'>Welcome to Derry & Strabane Council</h1>
          </div>
        </header>
        <div id='appBody' className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <p className='App-intro col-xs-8 col-sm-8 col-md-8 col-lg-8'>
            Basic React Application <code>src/App.js</code>.
          </p>
        </div>
      </div>
    )
  }
}

export default App
