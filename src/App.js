import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  console.log({ count });
  console.log({ setCount });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((prevCount) => prevCount + 1);
  const decrement2 = () => setCount((prevCount) => prevCount - 1);

  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const divideThree = () =>
    setCount((prevCount) => (prevCount % 3 === 0 ? prevCount / 3 : prevCount));

  return (
    <>
      <div className='App'>count: {count}</div>
      <br />
      <div>
        <span>通常の関数型</span>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <br />
      <div>
        <span>引数として元の値を受け取る型</span>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <br />
      <button onClick={reset}>Reset</button>
      <button onClick={double}>*2</button>
      <button onClick={divideThree}>3の倍数の時だけ3でわる</button>
    </>
  );
}

export default App;
