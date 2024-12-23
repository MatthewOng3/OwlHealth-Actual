import { useState, useEffect } from "react";

/**
 * @description Timer hook, stores timer state and exports functions to control the component
 * @returns Functions to manipulate the timer
 */
export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //Runs this after rendering, and retriggers after each isRunning state
  useEffect(() => {
    let timer;

    if (isRunning) {
        //Increment timer
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const pauseTimer = () => setIsRunning(false);
  const resumeTimer = () => setIsRunning(true);

  return { seconds, startTimer, stopTimer, pauseTimer, resumeTimer };
}
