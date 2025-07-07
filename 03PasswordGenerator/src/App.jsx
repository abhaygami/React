import React , { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  
  const [length,setLength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [specialCharAllowed,setspecialCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passRef = useRef(null);

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";

    if(specialCharAllowed) str += "!@#$%^&*`~\\/?";

    for(let i = 0;i < length;i++) {

      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,specialCharAllowed,setPassword])

  const copyText = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    generatePassword();
  },[length,numberAllowed,specialCharAllowed,generatePassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 my-8 text-orange-500 bg-gray-800 '>
        <h1 className='text-center text-white pt-4'>Password Generator</h1><br/>
        <div className='flex shadow rounded-md overflow-hidden mb-4'>
          
          <input type="text" 
            value={password} 
            ref={passRef}
            className='outline-none w-full py-1 px-3 bg-white mb-3' 
            placeholder='Password' 
            readOnly />

          <button
            onClick={copyText} 
            className='outline-none bg-blue-700 text-white mb-3 rounded px-3 py-0.5 shrink-0 cursor-pointer'
          > Copy </button>
        
        </div>
        <div className='flex text-sm gap-x-2 pb-3'>
          <div className='flex items-center gap-x-1'>
            
            <input 
              type="range"
              min={6}
              max={18}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}  />
            
            <label>Length({length})</label>
          </div>
          <div className='flex items-center gap-x-1 px-2'>
            <input 
              type="checkbox"
              id='numberAllowed'
              defaultChecked = {numberAllowed}
              onChange={ ()=>{
                setnumberAllowed((prev)=>!prev)
                }
              }  />
              <label htmlFor='numberAllowed'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 px-2'>
            <input 
              type="checkbox"
              id='specialCharAllowed'
              defaultChecked = {specialCharAllowed}
              onChange={ ()=>{
                setspecialCharAllowed((prev)=>!prev)
                }
              }  />
              <label htmlFor='specialCharAllowed'>Special Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
