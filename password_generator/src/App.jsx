import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const refPassword=useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) str += "`~!@#$%^&*()_-+={}[]<>?/*|;";
    if (numberAllowed) str += "0123456789";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() *str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, charAllowed, numberAllowed, PasswordGenerator]);

  const clipBoardCopy=useCallback(()=>{
    refPassword.current?.select()
    refPassword.current?.setSelectionRange(0, 15);  
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none w-full py-1 px-3"
          readOnly
          ref={refPassword}
        />
        <button 
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={clipBoardCopy}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id="Numberinput"
            onChange={()=>setNumberAllowed(prev=>!prev)}/>
            <label htmlFor="Numberinput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charAllowed}
            id="Charinput"
            onChange={()=>setCharAllowed(prev=>!prev)} />
            <label htmlFor="Charinput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
