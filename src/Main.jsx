import * as React from "react";
import * as ReactDOM from "react-dom";

import { Clock } from "./Clock";
// TODO call render here
function renderHtml() {
  ReactDOM.render(
    <Clock time={new Date().toLocaleTimeString()}/>,
    document.getElementById("content")

    );
  }
  window.setInterval(renderHtml, 1000);