import React from 'react'
import {NavLink} from 'react-router-dom'


const HeaderComp = () => (

  <header>
      <nav className='main-navigation'>
        <NavLink to='/' activeClassName='is-active' exact>Expenses</NavLink>
        <NavLink to='/add' activeClassName='is-active'>Add Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/contact-us' activeClassName='is-active'>Contact Us</NavLink>
      </nav>
  </header>

)

export default HeaderComp
