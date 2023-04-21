import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='parent'>
      <ul className='navbar'>
      <li className='login'><Link to={"/login"}>Login</Link></li>
      <li className='home'><Link to={"/"}>Home</Link></li>
      <li className='signup'><Link to={"/signup"}>SignUp</Link></li>
    </ul>
    </div>
  )
}

export default Header