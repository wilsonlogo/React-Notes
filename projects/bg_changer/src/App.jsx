import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <div className='flex flex-wrap justify-center bg-white shadow-lg gap-3 rounded-3xl px-2 py-1'>
          <button onClick={()=>setColor("red")} className="outline-none px-5 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:'red'}}>RED</button>
          <button onClick={()=>setColor("green")} className="outline-none px-5 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:'green'}}>GREEN</button>
          <button onClick={()=>setColor("violet")} className="outline-none px-5 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:'violet'}}>VIOLET</button>
          <button onClick={()=>setColor("pink")} className="outline-none px-5 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:'pink'}}>PINK</button>
          <button onClick={()=>setColor("orange")} className="outline-none px-5 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:'orange'}}>ORANGE</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-5 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:'blue'}}>BLUE</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-5 py-1 text-black text- rounded-full shadow-2xl" style={{backgroundColor:'yellow'}}>YELLOW</button>
          <button onClick={()=>setColor("white")} className="outline-none px-5 py-1 text-black rounded-full shadow-2xl" style={{backgroundColor:'white'}}>WHITE</button>
          <button onClick={()=>setColor("black")} className="outline-none px-5 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:'black'}}>BLACK</button>
          <button onClick={()=>setColor("grey")} className="outline-none px-5 py-1 text-white rounded-full shadow-2xl" style={{backgroundColor:'grey'}}>GREY</button>

        </div>
      </div>
    </div>
  )
}

export default App
