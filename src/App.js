import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

import { Button } from './components/shared/Button/Button'

import Card from "./components/shared/Card/Card";

import Input from './components/shared/Input/Input';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    :before,
    :after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    background-color: ${props => props.theme.colorPrimaryDark};
  }
  body {
    font-family: ${props => props.theme.fontPrimary};
    font-weight: 300;
    line-height: 1.6;
    color: ${props => props.theme.textColorLight}
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />

        <h1>Awesome</h1>
       
        <Input
          name="Name"
          type="text"
          
        />
        <div style={{margin: '10px'}}/>
        <Input 
          name="Password"
          type='password'
         
        />

        <Button>TRAVEL</Button>

        <div>Awesome</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))"
          }}
        >
          <Card tagColor="red" fullWidth={true} />
          <Card tagColor="blue" fullWidth={true} />
          <Card tagColor="purple" fullWidth={true} />
          <Card tagColor="orange" fullWidth={true} />
          <Card tagColor="black" fullWidth={true} />
          <Card tagColor="green" fullWidth={true} />
          <Card tagColor="yellow" fullWidth={true} />
        </div>

      </React.Fragment>
    );
  }
}

export default App;
