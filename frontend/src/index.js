import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './components/App'
// import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'

// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))