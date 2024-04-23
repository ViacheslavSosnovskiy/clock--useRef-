import { useEffect, useRef, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    startTime();

    return () => stopTime();
  }, []);

  const startTime = () => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  const stopTime = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h2>Current time: {time.toLocaleTimeString()}</h2>
      <button type="button" onClick={startTime}>
        update time
      </button>
      <button type="button" onClick={stopTime}>
        stop time
      </button>
    </div>
  );
}
