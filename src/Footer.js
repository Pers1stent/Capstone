import React from 'react'
import {Link} from 'react-router-dom';
import './components/home.css'
import logo2 from './images/header_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={logo2} alt='logo' width={117} height={206}/>
        </div>
        <div className='footer_links'>
            <div className='navigation'>
                <h3>Doormat navigation</h3>
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/menu'>Menu</Link></p>
                <p><Link to='/reservations'>Reservation</Link></p>
                <p><Link>Order Online</Link></p>
                <p><Link to='/Login'>Login</Link></p>
            </div>
            <div className='contact'>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div className='socialMedia'>
                <h3>Social Media Links</h3>
                <p>Instagram</p>
                <p>Telegram</p>
                <p>Twitter</p>
            </div>
        </div>
    </div>
  )
}

export default Footer