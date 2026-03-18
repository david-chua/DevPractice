export default function Steps(props) {
  const { step, addStep, subtractStep } = props;
  return (
    <div className="step">
      <button onClick={subtractStep}>-</button>
      <span>Step: {step}</span>
      <button onClick={addStep}>+</button>
    </div>
  );
}
