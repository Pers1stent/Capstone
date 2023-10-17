import React from 'react'
import mike from '../images/Mike.jpg'
import adrian from '../images/Adrian.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='leftPart'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div className='rightPart'>
            <img src={mike} alt='Mike, owner' width={260} height={335}/>
            <img src={adrian} alt='Adrian, owner' width={260} height={335}/>
        </div>
    </div>
  )
}

export default About
