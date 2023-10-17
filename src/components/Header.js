import React from 'react';
import logo from '../images/Logo.svg';
import logo2 from '../images/lemon.png'
import { Helmet } from 'react-helmet';
import './style.css'

const Header = () => {
  return (
    <div className='header'>
        <Helmet>
            <title>Little Lemon</title>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Little Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection."/>
            <meta name="author" content="Maksym Kostiuk"/>
            <meta property="og:title" content="Little Lemon"/>
            <meta property="og:description" content="Little Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection."/>
            <meta property="og:image" content="images/header_logo.png"/>
            <link rel="icon" href={logo2} type="image/png"/>
        </Helmet>
        <img src={logo} alt="logo" width={237} height={64}/>
        <nav>
            <ul>
                <li>HOME</li>
                <li><a>ABOUT</a></li>
                <li><a>MENU</a></li>
                <li><a>RESERVATIONS</a></li>
                <li><a>ORDER ONLINE</a></li>
                <li><a>LOGIN</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header