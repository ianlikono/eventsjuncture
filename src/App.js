import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

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
    font-family: $font-primary;
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
      </React.Fragment>
    );
  }
}

export default App;
