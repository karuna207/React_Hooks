import { useEffect, useState,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 


//use case 2 use ref being used to manipulate DOM

function App() {
  const [count, setCount] = useState(0);
  const btnRef =useRef() 

  useEffect(() => { 
    alert(`Initail render`);

  },[]) 

  function handleClick(){
    setCount((prev)=>{
      return prev+1;
    })  
    btnRef.current.style.backgroundColor="red"; 

  }
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
