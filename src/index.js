import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import "./index.css";
import "./css/header.css";
import "./css/countdown.css";
import PomodoroApp from "./PomodoroApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PomodoroApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
