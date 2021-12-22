import React, { useState, useEffect } from "react";

const TestComp = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const int = setInterval(() => setTime(new Date().toLocaleString()), 1000);

    return function clearInt() {
      clearInterval(int);
    };
  }, []);

  return <div>Current Time: {time}</div>;
};

export default TestComp;
