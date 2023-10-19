import React from 'react'
import {useState} from 'react'
import './components/home.css'
import logo from './images/Logo.svg';
import {Link} from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className={`header`}>
        <Link to='/'><img src={logo} alt="logo" width={237} height={64}/></Link>
        <nav>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/Menu'>MENU</Link></li>
                <li><Link to='/Reservations'>RESERVATIONS</Link></li>
                <li><a>ORDER ONLINE</a></li>
                <li><Link to='/Login'>LOGIN</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar