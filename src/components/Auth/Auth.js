import React from 'react';
import AuthRoute from './AuthRoute';
import { Link } from 'react-router-dom';

import { AuthWrapper, PictureWrapper, DisplayWrapper, ContentWrapper ,Label, ActionWrapper } from './AuthStyle'

class Auth extends React.Component{

  

  render(){

    return(
      <AuthWrapper>
          <PictureWrapper>
          
          </PictureWrapper>
          
          <DisplayWrapper>
          <ContentWrapper>
          
          <ActionWrapper>
            <Link to="/auth/login"><Label>Log In</Label></Link>
            <Link to="/auth/signup"><Label>Sign Up</Label></Link>
          
          </ActionWrapper>
          {AuthRoute}

          </ContentWrapper>
      
          </DisplayWrapper>
      </AuthWrapper>
    )
  }

}

export default Auth