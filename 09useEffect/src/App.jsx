import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(interval);
      console.log("Timer cleaned up");
    };
  }, []); // run once

  return <h2>Timer: {seconds} seconds</h2>;
}

export default Timer;
