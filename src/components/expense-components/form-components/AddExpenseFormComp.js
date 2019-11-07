import React, {Component} from 'react'
import '../../../scss/components/add-expense.scss'
import {TimelineMax,Bounce} from 'gsap/TweenMax'
import addXpImg from '../../../images/axp.png'


class AddExpenseFormComp extends Component {
  constructor(props) {
    super(props)
    this.state ={
      expense: {
        name: '',
        desc: '',
        amount: 0,
      },
      errAmt: false,
      errDesc: false,
    }
    this.handleSubmitExpense = this.handleSubmitExpense.bind(this)
  }

  componentDidMount() {
    const axfp = new TimelineMax()
    axfp.from('.addxp__right img', 1.65, {
      y: -950,
      ease: Bounce.easeOut,
    },'+=.35')
    axfp.from('.addxp__left h3', 1.25, {
      opacity:.25,
      y: -350,
      ease: Bounce.easeOut,
    },'-=.15')

  }

   handleExpenseChange = (e) => {
     const {name,value,type} = e.target
     if(type === 'text') {
       return (
         this.setState({
           expense: {
             ...this.state.expense,
             [name]: value,
           }
         })
       )
     }
     if(type === 'textarea') {
       console.log(value.length)
       this.setState({
         expense: {
           ...this.state.expense,
           [name]: value,
         },
         errDesc: (String(value.length) >= 3) ? false : true,
       })
     }
     if(type === 'number') {
       let val = String(value)
       const regxp = /^[1-9]\d*(\.\d{0,2})?$/
       let isMatch = !val || val.match(regxp)

       if(isMatch) {
         this.setState({
           expense: {
             ...this.state.expense,
             [name]: Number(value)
           },
           errAmt: (Number(value) > 0) ? false : true,
         })
       }
     }
   }

   handleSubmitExpense(e) {
     e.preventDefault()
     const {expense: {amount,desc},errAmt,errDesc} = this.state
     if(amount === 0) this.setState(() => ({errAmt: true}))
     if(desc.length < 3) this.setState(() => ({errDesc: true}))
     else if(!errAmt && !errDesc) {
       this.setState(() => ({//clear values
         expense:{
           name: '',
           amount: 0,
           desc: '',
         }}))
       console.log('form submitted')
     }
   }

   render() {
     const {expense:{name,desc,amount},errAmt,errDesc} = this.state

     return (
       <div className='addxp__form-wrap'>

         <form
           onSubmit={this.handleSubmitExpense}
           id='add-expense__form'
         >
           <div className='addxp__inner-form'>
             <div className='addxp__left'>
               <h3>Fill out form to add expense.</h3>
               <h4>Name:</h4>
               <input
                 onChange={(e) => this.handleExpenseChange(e)}
                 className='addxp__input-field'
                 autoFocus
                 required
                 type='text'
                 name='name'
                 value={name}
                 placeholder='expense name'
               />

               <h4>Description: { !!errDesc &&
                    <span>{'An expense description is required'}</span>
               }</h4>
               <textarea
                 onChange={(e) => this.handleExpenseChange(e)}
                 value={desc}
                 className='addxp__textarea-field'
                 rows={5}
                 cols={15}
                 type='textarea'
                 name='desc'
                 placeholder='expense description'
               />

               <h4>Amount: { !!errAmt &&
                    <span>{'Please provide an amount value'}</span>
               }</h4>
               <input
                 onChange={(e) => this.handleExpenseChange(e)}
                 value={amount}
                 className='addxp__input-field'
                 type='number'
                 name='amount'
                 placeholder='expense amount'
               />

             </div>

             <div className='addxp__right'>
               <img src={addXpImg} alt={'add expense'} />
             </div>
           </div>


           <div className='addxp__button-wrap'>
             <button type='submit'>
                Add Expense
             </button>
           </div>

         </form>

       </div>
     )
   }


}


export default AddExpenseFormComp
