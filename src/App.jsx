import { useState, useEffect } from "react";

function loadSaved() {
  try {
    const saved = localStorage.getItem("counterData");
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function Counter() {
  const [saved] = useState(loadSaved);
  const [count, setCount] = useState(saved.count ?? 0);
  const [step, setStep] = useState(saved.step ?? 1);
  const [history, setHistory] = useState(saved.history ?? []);

  useEffect(() => {
    localStorage.setItem("counterData", JSON.stringify({ count, step, history }));
  }, [count, step, history]);

  const change = (amount) => {
    const newCount = count + amount;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  return (
    <>
      <div style={{ margin: '0 auto', border: '1px solid white', padding: '50px', borderRadius: '30px', maxWidth: '400px', textAlign: 'center' }}>
        <p>Counter</p>
        <h1>Current Count: {count}</h1>

        <p>Step Value</p>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <br /><br />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={() => change(-step)}>Decrement by {step}</button>
          <button onClick={() => change(step)}>Increment by {step}</button>
          <button
            style={{ backgroundColor: 'red' }}
            onClick={() => {
              setCount(0);
              setHistory([]);
            }}
          >
            Reset
          </button>
        </div>

        <h3>History</h3>
        <ul style={{ listStyle: 'none', padding: 0, maxHeight: '150px', overflowY: 'auto' }}>
          {history.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Counter;