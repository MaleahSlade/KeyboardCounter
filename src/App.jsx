import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

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
          <button className="subtractBtnTwo" onClick={() => setCount(count - step)}>
            Decrement by {step}
          </button>
          <button className="addBtnTwo" onClick={() => setCount(count + step)}>
            Increment by {step}
          </button>
          <button style={{ backgroundColor: 'red' }} onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;