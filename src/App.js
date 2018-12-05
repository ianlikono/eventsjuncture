import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import routes from "./routes";

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
    font-size: 62.5% !important;
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
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyle />
          <NavBar />
          {routes}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
