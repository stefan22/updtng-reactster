import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//expense comps
import ExpenseDashboardComp from '../expense-components/ExpenseDashboardComp'
import AddExpenseComp from '../expense-components/AddExpenseComp'
import EditExpenseComp from '../expense-components/EditExpenseComp'
//other comps
import ContactUsComp from '../ContactUsComp'
import NotFoundComp from '../NotFoundComp'
//layout comps
import HeaderComp from '../layout-components/HeaderComp'
import FooterComp from '../layout-components/FooterComp'
import { TweenLite,TimelineMax, Power2} from 'gsap/all'


class AppRouter extends Component {
  constructor() {
    super()
    this.state ={
      isMouse: false,
    }
    this.handleScrollMouse = this.handleScrollMouse.bind(this)
  }

  componentDidMount() {
    this.setState({
      isMouse: false,
    })
  }

  handleScrollMouse() {
    const tm1 = new TimelineMax()
    console.log('clicked')
    this.setState({
      isMouse: true,
    })

    TweenLite.to(window, 1, {
      scrollTo: { y: '#hd__heronav', offsetY: 70, autoKill: false},
    })

    tm1.from('#hd__heronav', 1, {
      opacity: 0,
      ease: Power2.easeOut,
    }).to('#hd__heronav',1, {
      opacity: 1,
      paddingTop: 50,
      offsetY: 70,
      ease: Power2.easeOut,
    }, '-=.35')
  }





  render() {
    const {isMouse} = this.state


    return (
      <BrowserRouter>
        <HeaderComp
            handleScrollMouse={this.handleScrollMouse}
            title={'Reactster'}
            isMouse={isMouse}
        />
        <Switch>
          <Route path='/' component={ExpenseDashboardComp} exact />
          <Route path='/add' component={AddExpenseComp} />
          <Route path='/edit' component={EditExpenseComp} />
          <Route path='/contact-us' component={ContactUsComp} />
          <Route component={NotFoundComp} />
        </Switch>

        <FooterComp
          title={'Reactster'}

        />
      </BrowserRouter>
    )

  }

}


export default AppRouter
