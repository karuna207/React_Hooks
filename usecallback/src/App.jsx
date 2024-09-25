import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Child from './components/Child' 


function App() {
  const [count, setCount] = useState(0)   
  const [count2, setCount2] = useState(0)   

  const changeCount2=useCallback(()=>{
    setCount2(count2-1);
  },[])


  return (
    <>
      
      <Child cnt={count2} ccount={changeCount2}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>  
      
      </div>
     
    </>
  )
}

export default App
