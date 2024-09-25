import React from 'react' 
import {NavLink} from "react-router-dom"

const Navbar = () => {

   
  return (
    <div>   
        <NavLink to="/"><li>Home</li></NavLink>       
        <NavLink to="/login"><li>Login</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink> 

    </div>
  )
}

export default Navbar