import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import CountDown from "./components/CountDown";
export default class PomodoroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Deep Work",
    };
  }
  render() {
    return (
      <div className="pomodoro-app">
        <div className="pomodoro__container">
          <Header />
          <CountDown />
        </div>
      </div>
    );
  }
}
