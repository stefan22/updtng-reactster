import React from 'react'
import '../../../scss/components/input-textfield.scss'
import {connect} from 'react-redux'
import {setTextFilter} from '../../../actions/filters'


const ConnectedInputTextField = ({type,name,filters,dispatch}) => {

  return (
    <div className='xps__list--input-wrapper'>
      <input
        className='xps__list__input'
        onChange={(e)=>
          dispatch(setTextFilter(e.target.value)
        )}
        type={type} name={name} value={filters.text} />
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}


export default connect(mapStateToProps)(ConnectedInputTextField)
