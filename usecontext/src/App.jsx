import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { counterContext } from "./context/context"; 


function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
    <counterContext.Provider value={{count,setCount}}>
      <Navbar />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click here
      </button> 
      </counterContext.Provider>
    </>
  );
}

export default App;
