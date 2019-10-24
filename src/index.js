import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/router/AppRouter'
//global styles
import './scss/styles.scss'


ReactDOM.render(

  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,

  document.getElementById('root')
)
