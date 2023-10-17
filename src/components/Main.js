import React from 'react'
import './style.css'
import restaurantFood from '../images/restauranfood.jpg'
import greekSalad from '../images/greek salad.jpg'
import scooter from '../images/scooter.png'
import bruschetta from '../images/bruchetta.jpg'
import lemonDessert from '../images/lemon dessert.jpg'
import firstGirl from '../images/firstCard.jpg'
import secondGirl from '../images/secondCard.jpg'
import man from '../images/thirdCard.jpg'



const Main = () => {
  return (
    <div className='main'>
        <div className='heroSection'>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection.</p>
                <button>Reserve a table</button>
            </div>
            <img src={restaurantFood} alt="restaurantFood"/>
        </div>
        <div className='highlights'>
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
    </div>
  )
}

export default Main