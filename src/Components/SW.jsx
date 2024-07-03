import React, { useState, useRef } from 'react';
import './SW.css';

const SW = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="SW">
      <h1>Stopwatch</h1>
      <div className="time">Time: {formatTime(time)}</div>
      <div className="controls">
        <button onClick={startStopwatch} disabled={running}>Start</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default SW;
