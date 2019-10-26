import React, {Component} from 'react'
import {TimelineMax, Power3,Bounce} from 'gsap/TweenMax'

class EditExpenseComp extends Component {

  componentDidMount() {
    const exp = new TimelineMax()
    exp.from('#edit-expense',1.5, {
      ease: Power3.easeOut,
      x: 1500,
    })
    .from('#edit-expense h3', 1.5, {
      opacity: 0.25,
      ease: Bounce.easeOut
    })
  }

  render () {
    return (
      <div id="main">
        <div id='edit-expense' className='dashboard edit-expense'>
          <h3>Expense Edit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Etiam erat velit scelerisque in. Turpis massa sed elementum tempus egestas
          sed sed risus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
          Mauris vitae ultricies leo integer malesuada nunc.
          Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis.
          Sit amet est placerat in. Pretium lectus quam id leo. In eu mi bibendum
          neque egestas.</p>

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

export default EditExpenseComp
