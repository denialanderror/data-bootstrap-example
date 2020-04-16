import React from "react";
import ReactDOM from "react-dom";
import DataComponent from "./components/DataComponent";

if (module.hot) {
  module.hot.accept();
}

var mountNode = document.getElementById("app");
ReactDOM.render(<DataComponent />, mountNode);
