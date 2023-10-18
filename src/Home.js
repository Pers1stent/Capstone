import React from 'react'
import {Link} from 'react-router-dom'
import './components/home.css'
import restaurantFood from './images/restauranfood.jpg'
import greekSalad from './images/greek salad.jpg'
import scooter from './images/scooter.png'
import bruschetta from './images/bruchetta.jpg'
import lemonDessert from './images/lemon dessert.jpg'
import firstGirl from './images/firstCard.jpg'
import secondGirl from './images/secondCard.jpg'
import man from './images/thirdCard.jpg'
import logo3 from './images/lemon.png'
import { Helmet } from 'react-helmet';
import mike from './images/Mike.jpg'
import adrian from './images/Adrian.jpg'

const Home = () => {
  return (
    <>
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
                <link rel="icon" href={logo3} type="image/png"/>
            </Helmet>
       </div>
       <div className='main'>
            <div className='heroSection'>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection.</p>
                    <button><Link to='/reservations'>Reserve a table</Link></button>
                </div>
                <img src={restaurantFood} alt="restaurantFood"/>
            </div>
            <div className='highlights'>
                <div className='topHighlights'>
                    <h2>This weeks Specials!</h2>
                    <button><Link to='./menu'>Online Menu</Link></button>
                </div>
                <div className='bottomHighlights'>
                    <div className='card'>
                        <img src={greekSalad} alt='greek salad' width={267} height={200}/>
                        <div className='card_elements'>
                            <div className='top_card'>
                                <h3>Greek Salad</h3>
                                <p>$12.99</p>
                            </div>
                            <div className='middle_card'>
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            </div>
                            <div className='bottom_card'>
                                <h4>Order a delivery</h4>
                                <img src={scooter} alt='scooter' width={29} height={29}/>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={bruschetta} alt='bruschetta' width={267} height={200}/>
                        <div className='card_elements'>
                            <div className='top_card'>
                                <h3>Bruschetta</h3>
                                <p>$5.99</p>
                            </div>
                            <div className='middle_card'>
                                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            </div>
                            <div className='bottom_card'>
                                <h4>Order a delivery</h4>
                                <img src={scooter} alt='scooter' width={29} height={29}/>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={lemonDessert} alt='lemonDessert' width={267} height={200}/>
                        <div className='card_elements'>
                            <div className='top_card'>
                                <h3>Lemon Dessert</h3>
                                <p>$5.00</p>
                            </div>
                            <div className='middle_card'>
                                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            </div>
                            <div className='bottom_card'>
                                <h4>Order a delivery</h4>
                                <img src={scooter} alt='scooter' width={29} height={29}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonials'>
                <h2>Testimonials</h2>
                <div className='test_cards'>
                    <div className='cards'>
                        <h4>Rating</h4>
                        <div className='middle'>
                            <img src={firstGirl} alt='girl' width={55} height={55}/>
                            <p>Name</p>
                        </div>
                        <p>Review</p>
                    </div>
                    <div className='cards'>
                        <h4>Rating</h4>
                        <div className='middle'>
                            <img src={man} alt='man' width={55} height={55}/>
                            <p>Name</p>
                        </div>
                        <p>Review</p>
                    </div>
                    <div className='cards'>
                        <h4>Rating</h4>
                        <div className='middle'>
                            <img src={secondGirl} alt='girl' width={55} height={55}/>
                            <p>Name</p>
                        </div>
                        <p>Review</p>
                    </div>
                </div>
            </div>
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
        </div>
    </>
  )
}

export default Home