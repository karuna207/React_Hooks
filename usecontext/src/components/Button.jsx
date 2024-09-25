import React, { createContext } from 'react' 
import Final from "./Final" 
import { useContext } from 'react' 
import { counterContext } from '../context/context'

const Button = () => { 
  const obj=useContext(counterContext)
  return (
    <div>
      Button  
      <button onClick={()=>{
          obj.setCount(obj.count+1);
      }}>Click to increment</button>
      <Final/>
    </div>
  )
}

export default Button
