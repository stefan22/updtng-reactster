import uuid from 'uuid'

//add expense
export const addExpense = ({name='',desc='',amount=0,created=0}={}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    name,
    desc,
    amount,
    created,
  }
})

//edit expense
export const editExpense = (id,updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
})

//remove expense
export const removeExpense = ({id}={}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

