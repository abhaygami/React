import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [cnt,setCounter] = useState(0);

  function increase() {
    if(cnt+1 == 21) return;
    setCounter(cnt+1);
  }

  function decrease() {
    if(cnt-1 == -1) return;
    setCounter(cnt-1);
  }

  return (
    <>
      <h1>Hellooo World!</h1>
      <h2>Counter Value : {cnt} </h2>
      <button onClick={increase}>Increase Counter</button><br /><br />
      <button onClick={decrease}>Decrease Counter</button>
    </>
  )
}

export default App
