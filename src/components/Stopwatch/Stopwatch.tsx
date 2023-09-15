import React, { useState, useEffect } from "react";
import { StopwatchType } from "../../types";
import "./stopwatch.css";

const Stopwatch: React.FC<StopwatchType> = ({isRunning, timesFn}) => {
  // state to store time
  const [timeNumber, setTimeNumber] = useState(0);

  useEffect(() => {
    let intervalId: number
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = window.setInterval(() => setTimeNumber(timeNumber + 1), 10);
    }
    timesFn(timeString, timeNumber)
    return () => clearInterval(intervalId);
  }, [isRunning, timeNumber]);

  // Minutes calculation
  const minutes = Math.floor(timeNumber / 6000);

  // Seconds calculation
  const seconds = Math.floor((timeNumber % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = timeNumber % 100;

  const timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`

  return (
    <div className="stopwatch__container">
      <div className="stopwatch__time">
        {timeString}
      </div>
    </div>
  );
};

export default Stopwatch;