import React, {Component} from 'react'
import {TimelineMax, Power3,Bounce} from 'gsap/TweenMax'
import '../../scss/components/add-expense.scss'

class AddExpenseComp extends Component {

  componentDidMount() {
    const axp = new TimelineMax()
    axp.from('#add-expense', 1.5, {
      x: - 1500,
      ease: Power3.easeOut,
    })
    .from('#add-expense h3', 1.5, {
      opacity: 0.25,
      ease: Bounce.easeOut
    })
  }


  render () {
    return (
      <div id="main">
        <div id='add-expense' className='dashboard add-expense'>
          <h3>Expense Add</h3>
           <div className='addxp__form-wrap'>

            <form
              onSubmit={this.handleSubmit}
              id='add-expense--form'
            >
              <h3>Add your expenses here</h3>
              Name:
              <input
                className='addxp__input-field'
                type='text'
                name='name'
              />

              Expense:
              <input
                className='addxp__input-field'
                type='text'
                name='expense'
              />

              <div className='addxp__button-wrap'>
                <button type='submit'>
                  Add Expense
                </button>
              </div>
            </form>

          </div>
        </div>

        <nav className='navigation'>
          nav
        </nav>
        <aside className='results'>
          aside
        </aside>
      </div>
    )
  }
}

export default AddExpenseComp
