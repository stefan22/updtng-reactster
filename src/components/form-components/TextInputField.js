import React from 'react'
//import {InputField,Label,TextField} from '../../scss/components/Form'
import '../../scss/components/add-expense.scss'

const TextInputField = ({name,label,type,value,onChange,onBlur}) => {

  return (
    <>
      <TextField>
        <Label
          htmlFor={name}
        >
          {label}
        </Label>
        <InputField
          id={name}
          name={name}
          value={value}
          type={type}
          required={true}
          onChange={onChange}
          onBlur={onBlur}
        />
      </TextField>
    </>
  )

}


export default TextInputField
