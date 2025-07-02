import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  let addValue=()=>{
    if(counter<20){
      setCounter(counter+1)
    }
  }
  let subValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

// function App(){
//   const [counter,setCounter]=useState(0)
//   const addValue=()=>{
//     setCounter(counter+1)
//     setCounter(counter+1)
//     setCounter(counter+1)
//     setCounter(counter+1)
//   }
//   const add_Value = () => {
//   setCounter(prev => prev + 1);
//   setCounter(prev => prev + 1);
//   setCounter(prev => prev + 1);
//   setCounter(prev => prev + 1);
//   }
 
  return (
    <>
      <h1>Hello, World!</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br/><br/>
      <button onClick={subValue}>Decrement</button>
      
    </>
  )
}

export default App
