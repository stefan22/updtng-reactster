import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import icon from "../../images/menu-icon.png";
import {Power2, TimelineMax} from 'gsap/TweenMax'

class HeaderComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      didScroll: false,
      lastScrolledTop: 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {

  }

  hasScrolled = (scrolledAmount) => {
    /*
    /-> not using this fn atm or scrolling here
    */
    console.log(scrolledAmount)
    const {lastScrolledTop} = this.state
    const hero = document.querySelector('.hd__hero')
    const tm2 = new TimelineMax()

    if(hero !== null) {
      if(scrolledAmount > 500) {
        this.setState({lastScrolledTop: scrolledAmount})
        //scrolled down
        //hero.style.display = 'none'
        //heronav.classList.add('intro');

          tm2.to('#heronav',1, {
          opacity: 1,
          paddingTop: '5vh',
          ease: Power2.easeOut
        })
      }
      else if(scrolledAmount <= lastScrolledTop) {
        //header.classList.remove('headsup');
        //heronav.classList.remove('intro');
        //tm2.
      }
    }
  }

  handleScroll(e) {
    const {didScroll} = this.state
    this.setState({didScroll: true})

    if(didScroll) {
      let scrolledAmount = e.target.scrollingElement.scrollTop;
      this.hasScrolled(scrolledAmount);
      this.setState({didScroll: false})
    }
  }

  render() {

    //window.addEventListener('scroll', this.handleScroll)

    return (

      <header

      >
        <nav id="main__navigation" className="main__navigation" role="navigation">

          <NavLink
            className="main__navigation--navlink"
            to="/" activeClassName="is-active" exact>
            <div className="main__navigation--icon">
              <img src={icon} width="24" height="24" alt='' />
            </div>
            <div className="main__navigation--title">
              Expenses
              <span>is where the heart is</span>
            </div>
          </NavLink>

          <NavLink
            className="main__navigation--navlink"
            to="/add" activeClassName="is-active">

            <div className="main__navigation--icon">
              <img src={icon} width="24" height="24" alt='' />
            </div>
            <div className="main__navigation--title">
              Add Expense
              <span>is nourishment for the soul</span>
            </div>
          </NavLink>

          <NavLink
            className="main__navigation--navlink"
            to="/edit" activeClassName="is-active">

            <div className="main__navigation--icon">
              <img src={icon} width="24" height="24" alt='' />
            </div>
            <div className="main__navigation--title">
              Edit Expense
              <span>guide you on your journey</span>
            </div>
          </NavLink>

          <NavLink
            className="main__navigation--navlink"
            to="/contact-us" activeClassName="is-active">

            <div className="main__navigation--icon">
              <img src={icon} width="24" height="24" alt='' />
            </div>
            <div className="main__navigation--title">
              Contact Us
              <span>brings new things</span>
            </div>
          </NavLink>
        </nav>

        <section
          className="hd__hero">
          <h1>
            <span>I'm mobile</span>Reactster
          </h1>
          <div
            onClick={this.props.handleScrollMouse}
            id='hd__hero--mouse'
            className='hd__hero--mouse'>
              <span></span>
          </div>
        </section>

        <nav
            id='hd__heronav'
            className='hd__heronav'
          >
            <div className='hd__heronav--dsboard'>Dashboard</div>
            <div className='hd__heronav--addxp'>Add Expense</div>
            <div className='hd__heronav--editxp'>Edit Expense</div>
            <div className='hd__heronav--contact'>Contact Us</div>
        </nav>



      </header>

    )
  }
}

export default HeaderComp;

//  <nav className='main-navigation'>
//         <NavLink to='/' activeClassName='is-active' exact>Expenses</NavLink>
//         <NavLink to='/add' activeClassName='is-active'>Add Expense</NavLink>
//         <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
//         <NavLink to='/contact-us' activeClassName='is-active'>Contact Us</NavLink>
//       </nav>
