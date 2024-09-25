import React from 'react' 
import items from './items'

const Todo = () => {
  return (
    <div>
      {items.map((item,ind)=>{ 
        return <div>
            title:{item.title}
            author:{item.author}
        </div>
      })}
    </div>
  )
}

export default Todo


