import React from 'react'
import ReactDOM from 'react-dom'

/* Remember to import bootstrap, font-awesome inside index.js */
/* NB: import these files before 'App' so they don't override 'App' component & it's children */
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
/* boostrap.min.js implicitly imports popper.js and jquery, so no need to import them */
import 'bootstrap/dist/js/bootstrap.min.js'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
