import React from 'react';
import { Form } from './LoginStyle'
import Input from '../../shared/Input/Input'
import {Button} from '../../shared/Button/Button'



const Login = () =>{
 
  return(
    <React.Fragment>
    <Form>
    
    <Input
      name="Name:"
      type="Text"
    /> 
    <Input
      name="Password:"
      type="password"
    /> 
    <Button type="submit" fontSize="1.5rem">Log In</Button>
    
    </Form>
    </React.Fragment>
  )
}

export default Login