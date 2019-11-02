import React from 'react'


const ExpenseListItem = ({name,id,amount,desc,create}) => (

  <div className='xps__list__single'>
    <h4>{name} expense</h4>
    <div className='xps__list__single--content'>
      <p>Id: {id}</p>
      <p>Amount: {amount}</p>
      <p>Description: {desc}</p>
      <p>Created: {create}</p>
    </div>
  </div>

)


export default ExpenseListItem
