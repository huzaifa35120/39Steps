import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootEl = document.getElementById("root");

// If React 18 is installed, use createRoot. Otherwise fall back to ReactDOM.render (React 17).
if (createRoot) {
  createRoot(rootEl).render(<App />);
} else {
  ReactDOM.render(<App />, rootEl);
}
