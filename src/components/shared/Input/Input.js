import React from 'react';
import { InputField, Label, InputWrapper } from './InputField';

const Input = (props) =>{
  const { type, name, required } = props;
  return(
    <React.Fragment>
    <InputWrapper>
    
    <InputField required type={type}/> 
    <Label>{name}</Label>
   
    </InputWrapper>
    
    </React.Fragment>
  )
}

export default Input
//you can pass in the name of the field and type**