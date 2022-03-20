import './App.css';
import { useState } from 'react';

function Mybutton({count, onClick}) {
  return (
    <button onClick={onClick}> clicked {count} times</button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handlerclick() {
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <h1>Counters thet update separately</h1>
      <div className='app-child'>
        <Mybutton count={count} onClick={handlerclick}/>
        <Mybutton count={count} onClick={handlerclick}/>
      </div>
    </div>
  );
}

