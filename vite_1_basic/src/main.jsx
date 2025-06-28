import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )

// Different way to render the app 
function RenderApp(){
  return (
    <>
      <h3>Rendering App using React !</h3>
    </>
  )
}
const customElement =(
  <a href="https://vitejs.dev/guide/features.html#jsx">Vite Docs</a>
)
const anotherElement=React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'Click me to go to Google'
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <App/>
  // RenderApp(),
  // customElement
  // anotherElement
)


