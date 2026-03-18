export default function Counter(props) {
  const { count, addCount, subtractCount } = props;
  return (
    <div className="count">
      <button onClick={subtractCount}>-</button>
      <span>Counter: {count}</span>
      <button onClick={addCount}>+</button>
    </div>
  );
}
