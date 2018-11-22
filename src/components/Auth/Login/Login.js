import React from 'react';
import Input from '../../shared/Input/Input'
import {Button} from '../../shared/Button/Button'



const Login = () =>{
 
  return(
    <React.Fragment>
    <Input
      name="Name:"
      type="Text"
    /> 
    <Input
      name="Password:"
      type="password"
    /> 
    <Button>Log In</Button>
    </React.Fragment>
  )
}

export default Login