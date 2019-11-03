//set text filter
export const setTextFilter = (text='') => ({
  type: 'SET_TEXT_FILTER',
  text,
})

//set sortByDate
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

//set sortByAmount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})


//set startDate
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
})


//set endDate
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
})


//filterBy :expenses
export const filterBy = (expenses, {text,sortBy,startDate,endDate}) => {
  return expenses.filter(itm => {
    //created greater than startDate
    const startDateMatch = typeof itm.startDate !== 'number' || itm.created >= startDate
    //created less than endDate
    const endDateMatch = typeof itm.endDate !== 'number' || itm.created <= endDate
    //search by txt
    const descMatch = itm.desc.toLowerCase().includes(text.toLowerCase())
    const nameMatch = itm.name.toLowerCase().includes(text.toLowerCase())
    //by name||desc
    return (nameMatch || descMatch) && startDateMatch && endDateMatch
  })
  //sort date/amount
    .sort((a,b) => {
      if (sortBy === 'date') {
        return a.created < b.created ? 1 : -1
      }
      else if(sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
      else {
        return expenses
      }
    })
}
