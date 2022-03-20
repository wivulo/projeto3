import './App.css';
import { useState } from 'react';

function Mybutton() {
  const [count, setCount] = useState(0);

  function handlerclick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handlerclick}> clicked {count} times</button>
  );
}

export default function MyApp() {
  return (
    <div className='App'>
      <h1>Counters thet update separately</h1>
      <div className='app-child'>
        <Mybutton />
        <Mybutton />
      </div>
    </div>
  );
}

