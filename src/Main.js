import React from 'react'
import restaurantFood from './images/restauranfood.jpg'
import greekSalad from './images/greek salad.jpg'
import scooter from './images/scooter.png'
import bruschetta from './images/bruchetta.svg'
import lemonDessert from './images/lemon dessert.jpg'
import firstGirl from './images/firstCard.jpg'
import secondGirl from './images/secondCard.jpg'
import man from './images/thirdCard.jpg'
import mike from './images/Mike.jpg'
import adrian from './images/Adrian.jpg'

const Main = () => {
  return (
    <div className='main'>
        <div className='heroSection'>
            <div className='heroSection_left'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection.</p>
                <button>Reserve a table</button>
            </div>
            <img src={restaurantFood} alt="restaurantFood" width={383} height={419}/>
        </div>
        <div className='highligts'>
            <div className='topHighlights'>
                <h2>This weeks Specials!</h2>
                <button>Online Menu</button>
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
  )
}

export default Main