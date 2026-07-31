import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
        <Link to={'/'}>
            <li> Home </li>
        </Link>
        <Link to={'/about'}>
            <li> About </li>
        </Link>
        <Link to={'/contact'}>
            <li> Contact </li>
        </Link>
        <Link to={'/prodlist'}>
            <li> prodlist </li>
        </Link>
        


    </div>
  )
}

export default NavBar