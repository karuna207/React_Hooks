import React, { useEffect } from 'react'

const Navbar = (props) => { 

    useEffect(()=>{
        alert("on every render")
    })

    useEffect(() => {
        alert("color was changed")
      }, [props.color])

       
      useEffect(()=>{
        alert("count was changed")
      },[props.count])

  return (
    <div>
      {props.heading}
    </div>
  )
}

export default Navbar
