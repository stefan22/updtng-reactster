import React from 'react'
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


const AppRouter = () => (

  <BrowserRouter>
    <HeaderComp
         title={'Reactster'}
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


export default AppRouter
