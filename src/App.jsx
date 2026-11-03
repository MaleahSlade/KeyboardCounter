import { useState } from "react";



function Counter() {
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(count);

return (
<>
<div style={{margin: '0 auto', border: '1px solid white', padding: '10px', borderRadius: '30px', maxWidth: '300px',  textAlign: 'center'}}>
<p>Counter</p>
<h1>Current Count: {count}</h1>
<br/>
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
<button className="addBtn" onClick ={() => setCount(count + 1)}>Increment</button>
<button className="subtractBtn" onClick = {() => setCount(count -1)}>Decrement</button>
{/* <button className="plusFiveBtn" onClick = {() => setCount(count + 5)}>Add 5</button> */}
<button onClick = {() => setCount(0)}>Reset</button>
</div>

</div>
<br/>

{/* <div>
<h2>Counter Two</h2>
<p>Current Count: {count2}</p>
<button className="addBtnTwo" onClick = {() => setCount2(count2 + count)}>Add{count}</button>
<button className="subtractBtnTwo" onClick = {() => setCount2(count2 - count)}>Subtract{count}</button>
<button onClick = {() => setCount2(0)}>Reset</button>
</div> */}
</>
)
}

export default Counter 