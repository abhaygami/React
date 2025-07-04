import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("white")

  return (
    <div className='w-full h-screen'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white rounded-lg px-2 py-2'>
          {/* Red Button */}
          <button 
          className='outline-none px-4 py-1.5 text-white rounded-lg shadow-lg'
          style={{backgroundColor: "red"}}
          onClick={()=>setColor("red")}
          >Red</button>
          {/* Green Button */}
          <button 
          className='outline-none px-4 py-1.5 text-white rounded-lg shadow-lg'
          style={{backgroundColor: "green"}}
          onClick={()=>setColor("green")}
          >Green</button>
          {/* Blue Button */}
          <button 
          className='outline-none px-4 py-1.5 text-white rounded-lg shadow-lg'
          style={{backgroundColor: "blue"}}
          onClick={()=>setColor("blue")}
          >Blue</button>
          {/* Olive Button */}
          <button 
          className='outline-none px-4 py-1.5 text-white rounded-lg shadow-lg'
          style={{backgroundColor: "olive"}}
          onClick={()=>setColor("olive")}
          >Olive</button>
          {/* Gray Button */}
          <button 
          className='outline-none px-4 py-1.5 text-white rounded-lg shadow-lg'
          style={{backgroundColor: "gray"}}
          onClick={()=>setColor("gray")}
          >Gray</button>
          {/* Yellow Button */}
          <button 
          className='outline-none px-4 py-1.5 text-black rounded-lg shadow-lg'
          style={{backgroundColor: "yellow"}}
          onClick={()=>setColor("yellow")}
          >Yellow</button>
          {/* Pink Button */}
          <button 
          className='outline-none px-4 py-1.5 text-black rounded-lg shadow-lg'
          style={{backgroundColor: "pink"}}
          onClick={()=>setColor("pink")}
          >Pink</button>
          {/* Purple Button */}
          <button 
          className='outline-none px-4 py-1.5 text-white rounded-lg shadow-lg'
          style={{backgroundColor: "purple"}}
          onClick={()=>setColor("purple")}
          >Purple</button>
          {/* Lavender Button */}
          <button 
          className='outline-none px-4 py-1.5 text-black rounded-lg shadow-lg'
          style={{backgroundColor: "lavender"}}
          onClick={()=>setColor("lavender")}
          >Lavender</button>
          {/* White Button */}
          <button 
          className='outline-none px-4 py-1.5 text-black rounded-lg shadow-lg'
          style={{backgroundColor: "white"}}
          onClick={()=>setColor("white")}
          >White</button>
          {/* Black Button */}
          <button 
          className='outline-none px-4 py-1.5 text-white rounded-lg shadow-lg'
          style={{backgroundColor: "black"}}
          onClick={()=>setColor("black")}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
