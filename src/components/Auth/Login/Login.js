import React from 'react';
import Input from '../../shared/Input/Input'


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
    </React.Fragment>
  )
}

export default Login