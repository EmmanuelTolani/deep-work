import React, { useState, useEffect, useRef } from "react";
import click from "../audio/click.mp3";
import gameOver from "../audio/game-done.wav";
const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

const INITIAL_COUNT = 100;
const clickSound = new Audio(click);
const gameOverSound = new Audio(gameOver);

export default function CountDown() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
    gameOverSound.play();
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );
  const toggleStart = () => {
    if (status == STATUS.STOPPED) {
      console.log(status);
      handleStart();
      clickSound.play();
      console.log(status);
    }
    if (status == STATUS.STARTED) {
      handleStop();
      clickSound.play();
    }
  };
  return (
    <div className="countdown-timer">
      <div className="countdown-timer__timer">
        {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
      </div>
      <div className="countdown-timer__button-box">
        <button className="countdown-timer__control" onClick={toggleStart}>
          {status == STATUS.STOPPED ? "Start" : "Stop"}
        </button>
        <button onClick={handleReset} type="button">
          Reset
        </button>
      </div>
      <div>Status: {status}</div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num) => String(num).padStart(2, "0");
