import { useState, useEffect } from "react";
import Steps from "./components/Steps";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());
  const [message, setMessage] = useState(`Today is ${date}`);

  function addStep() {
    setStep((s) => s + 1);
  }

  function subtractStep() {
    setStep((s) => s - 1);
  }

  function newMessage(days, date) {
    const changeCount = days;
    if (changeCount == 0) setMessage(`Today is ${date}`);
    if (changeCount > 0) setMessage(`${days} days from today is ${date}`);
    if (changeCount < 0) setMessage(`${Math.abs(days)} days ago was ${date} `);
  }

  function changeDate(days) {
    const day = new Date();
    day.setDate(day.getDate() + days);
    setDate(day.toDateString());
    newMessage(days, day.toDateString());
  }

  function addCount() {
    setCount((s) => s + step);
    changeDate(count + step);
  }

  function subtractCount() {
    setCount((s) => s - step);
    changeDate(count - step);
  }

  return (
    <div className="container">
      <Steps step={step} addStep={addStep} subtractStep={subtractStep} />
      <Counter
        count={count}
        addCount={addCount}
        subtractCount={subtractCount}
      />
      <p>{message}</p>
    </div>
  );
}

export default App;
