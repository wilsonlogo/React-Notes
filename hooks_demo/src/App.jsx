import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=10
  return (
    <>
      <h1>Hello, World!</h1>
      <h2>Counter Value :{counter}</h2>
      <button>Increment</button>
      <br/><br/>
      <button>Decrement</button>
      
    </>
  )
}

export default App
