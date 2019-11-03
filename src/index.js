import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/router/AppRouter'
//global styles
import './scss/styles.scss'
//redux state
import configStore from './store/configStore'
import {addExpense} from './actions/expenses'


//store
const store = configStore()
//actions
store.dispatch(addExpense({
  name: 'Office supplies June',
  desc: 'Corona extra: 25qty 12-packs imported Mexican beer.',
  amount: 250,
}))
store.dispatch(addExpense({
  name: 'Office supplies June',
  desc: 'Dominos: 45 large pepperoni and mushrooms, think crust pizzas',
  amount: 320,
}))
store.dispatch(addExpense({
  name: 'Office rent July',
  desc: 'July rent',
  amount: 850,
}))
store.dispatch(addExpense({
  name: 'Office supplies July',
  desc: 'Corona extra: 25qty 12-packs imported Mexican beer.',
  amount: 250,
}))
store.dispatch(addExpense({
  name: 'Office supplies July',
  desc: 'Dominos: 45 large pepperoni and mushrooms, think crust pizzas',
  amount: 320,
}))
store.dispatch(addExpense({
  name: 'Office rent August',
  desc: 'August rent',
  amount: 850,
}))


//getState
const state = store.getState()
console.log(state)


//provider
const provider = (
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
)



ReactDOM.render(
  provider,
  document.getElementById('root')
)
