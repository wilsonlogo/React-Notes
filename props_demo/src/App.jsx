import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  const Obj={
    name: "John",
    age: 30,
    city: "New York",
  }

  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-3xl mb-6">TailWind Demo</h1>
      {/* <Card myObj={Obj}/> */}
      <Card username="JohnDoe" btntext="Follow" />
      <Card username="JaneDoe" btntext="Message" />
    </>
  );
}

export default App;
