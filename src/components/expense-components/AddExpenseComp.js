import React, {Component} from 'react'
import {TimelineMax, Power3,Bounce} from 'gsap/TweenMax'
import AddExpenseFormComp from './form-components/AddExpenseFormComp'


class AddExpenseComp extends Component {

  componentDidMount() {
    const axp = new TimelineMax()
    axp.from('#add-expense', 1.5, {
      x: - 1500,
      ease: Power3.easeOut,
    })
      .from('#add-expense h2', 1.5, {
        opacity: 0.25,
        ease: Bounce.easeOut
      })
  }




  render () {


    return (
      <div id="main">
        <div id='add-expense' className='dashboard add-expense'>
          <h2>Add New Expense</h2>

          <AddExpenseFormComp />

        </div>

      </div>
    )
  }
}

export default AddExpenseComp
