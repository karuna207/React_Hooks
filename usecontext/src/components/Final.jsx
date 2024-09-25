import React from 'react'
import { useContext } from 'react' 
import { counterContext } from '../context/context'
const Final = () => { 
  const obj=useContext(counterContext)
  return (
    <div> 
      Final {obj.count}
    </div>
  )
}

export default Final
