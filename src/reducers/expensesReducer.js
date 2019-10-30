const expensesDefault = []

//expensesReducer
const expensesReducer = (state=expensesDefault,action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'EDIT_EXPENSE':
      state.filter(itm => {
        if(itm.id === action.id) {
          return {
            ...itm,
            ...action.updates
          }
        } else return itm;
      })
    case 'REMOVE_EXPENSE':
      state.filter(({id}) => id !== action.id)

    default:
      return state;
  }

}

export default expensesReducer
