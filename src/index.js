import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/router/AppRouter'
//global styles
import './scss/styles.scss'
//redux state
import configStore from './store/configStore'
import {addExpense} from './actions/expenses'
import {setTextFilter,filterBy} from './actions/filters'


//store
const store = configStore()
//actions
store.dispatch(addExpense({
  name: 'Office supplies June',
  desc: 'Corona extra: 25qty 12-packs imported Mexican beer.',
  amount: 250,
  }))
store.dispatch(addExpense({
  name: 'Office rent June',
  desc: 'June rent',
  amount: 850,
  }))
store.dispatch(setTextFilter('Corona'))

//getState
const state = store.getState()
//filtered
const filteredJuneOfficeSupplies = filterBy(state.expenses, state.filters)
console.log(filteredJuneOfficeSupplies) //√





ReactDOM.render(

  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,

  document.getElementById('root')
)
