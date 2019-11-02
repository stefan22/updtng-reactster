import React, {Component} from 'react'
import {TimelineMax, Power3,Bounce} from 'gsap/TweenMax'
import ConnectedExpensesList from './connected-expenses/ConnectedExpensesList'
import ConnectedInputTextField from './form-components/ConnectedInputTextField'


class Dashboard extends Component {

  componentDidMount() {
    const exp = new TimelineMax()
    exp.from('#dashboard',1.1, {
      ease: Power3.easeOut,
      y: -1100,
    })
    .from('#dashboard h3', 1.5, {
      opacity: 0.25,
      ease: Bounce.easeOut
    })
  }


  render () {

    return (
      <div id="main">
        <div id='dashboard' className='dashboard'>
          <div className='dashboard--heading'>
            <h3>Expense dashboard</h3>
            <p className='xps__list__par'>
              Filter Expenses By:
            </p>
          </div>

          <ConnectedInputTextField
            name={'filter'}
            type={'text'}
          />
          <ConnectedExpensesList />
        </div>

      </div>
    )
  }
}

export default Dashboard
