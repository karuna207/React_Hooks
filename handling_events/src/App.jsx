import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  const[form, setForm] = useState({
    email:"",
    password:""
  }) 

  const handleChange=(e)=>{
    setForm((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    }) 
    console.log(form.email);
    console.log(form.password);
    
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
      <form>
        <input type="text" name="email" value={form.email} onChange={handleChange}></input> 
        <input type="password" name="password" value={form.password} onChange={handleChange}></input>
      </form>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
