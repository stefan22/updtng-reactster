import React, {Component} from 'react'

class LoginComp extends Component {



  render () {
    console.log(this)
    return (
      <div id="main">
        <div id='edit-expense' className='dashboard edit-expense'>
          <h3>Login comp</h3>

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

export default LoginComp