import React from 'react';
import Input from '../../shared/Input/Input'
import { Form } from './SignUpStyle'


const SignUp = () =>{
  return(
    <React.Fragment>
    <Form>
    
      <Input
      name="FULL NAME:"
      type="Text"
      /> 
      
      <Input
      name="EMAIL:"
      type="email"
      /> 

      <Input
      name="PASSWORD:"
      type="password"
      /> 

      <Input
      name="REPEAT PASSWORD:"
      type="password"
      /> 
    </Form>
    </React.Fragment>
  )
}

export default SignUp