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
  colorBlueDark: "#2069BC",
  coloBlueMedium: "#588EDD",
  colorBlueLight: "#C5C4FF",

  colorPurpleDark: "#5F26FA",
  colorPurpleLight: "#B04AEA",

  colorAquaDark: "#1B7BDD",
  colorAquaMild: "#1EA6E5",
  colorAquaLight: "#26C8E5",
  colorAquaVeryLight: "#22e2c9"
  

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
