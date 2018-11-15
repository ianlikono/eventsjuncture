import React from 'react';
import { InputField, Label, InputWrapper } from './InputField';

const Input = (props) =>{
  const { type, name } = props;
  return(
    <React.Fragment>
    <InputWrapper>
    
    <InputField type={type}/> 
    <Label>{name}</Label>
   
    </InputWrapper>
    
    </React.Fragment>
  )
}

export default Input
//you can pass in the name of the field and type**