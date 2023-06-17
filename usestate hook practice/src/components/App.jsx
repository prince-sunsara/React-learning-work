import React from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  // console.log(now);
  const [time, setTime] = React.useState(now);

  setInterval(updateTime, 1000);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
