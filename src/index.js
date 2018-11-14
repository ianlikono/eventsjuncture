import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = {
  colorPrimaryDark: "#181818",
  colorPrimaryLight: "#333333",
  textColorLight: "#FFFFFF",
  textColorDark: "#AAAAAA",
  paragraphColor: "#888888",
  BorderColor: "#707070",
  colorPurpleDark: "#2069BC",
  colorPurpleMedium: "#588EDD",
  colorPurpleLight: "#C5C4FF",
  fontPrimary: "'Nunito', sans-serif",
  fontDisplay: "'Josefin Sans', sans-serif",
  HoverBoxShadow:
    "5px 6px 8px 5px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
  BoxShadow:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
