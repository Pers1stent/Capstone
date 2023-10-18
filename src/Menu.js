import React from 'react'
import './components/menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <div className='top_div'>
          <h1>Bites and Drinks</h1>
          <p>Our dishes are served once ready and placed in the centre of the table for sharing.</p>
        </div>
      <div className='parts'>
        <div className='left_Part'>
            <h2>Nibbles & Sharing</h2>
              <div className='div'>
                <h3>Roast Almonds <span>£4.00</span></h3>
                <p>Roasted in paprika & garlic</p>
              </div>
              <div className='div'>
                <h3>Mixed Carmona Olives <span>£4,50</span></h3>
                <p>Marinated olives from the Andalusian region</p>
              </div>
              <div className='div'>
                <h3>Selection of Breads <span>£4.50</span></h3>
                <p>Selection of artisan breads, aged balsamic & olive oil</p>
              </div>
              <div className='div'>
                <h3>House Focaccia & Dips <span>£5.95</span></h3>
                <p>Our in house focaccia served with a selection of dips</p>
              </div>
              <div className='div'>
                <h3>Antipasti <span>£17.50</span></h3>
                <p>Selection of cured meats, cheeses with crackers,
                chutneys & fruit</p> 
              </div>
              <div className='div'>
                <h3>Vegan Sharing Plate <span>£14.50</span></h3>
                <p>Selection of char grilled mixed vegetables, vegan
                cheese, olives, mushroom tapenade, sourdough
                bread</p>
              </div>
              <div className='div'>
                <h3>Patatas Bravas <span>£5.95</span></h3>
                <p>Crispy fried potatoes served with spicy sauce & aioli</p>
              </div>
          </div>
          <div className='right_Part'>
            <h2>Little Seafood bites</h2>
            <div className='div'>
              <h3>Cod al Pil Pil <span>£11.95</span></h3>
              <p>Pan seared fresh Cod, cooked in a Pil Pil sauce with
              capers and chopped parsley.</p>
            </div>
            <div className='div'>
              <h3>Pil Pil Gambas <span>£13.50</span></h3>
              <p>Peeled gambas cooked in rich garlic and red chilli
              olive oil, served with ciabatta bread.</p>
            </div>
            <div className='div'>
              <h3>Mussels <span>£10.50</span></h3>
              <p>Fresh mussels cooked in white wine sauce and
              finished with Mediterranean herb butter.</p> 
              </div>
            <div className='div'>
                <h3>Bouillabaisse <span>£15.50</span></h3>
                <p>Seasonal seafood, in a French Bouillabaisse sauce.</p>
            </div>
            <div className='div'>
                <h3>Calamari Fritti <span>£8.50</span></h3>
                <p>Fried calamari served with lobster aioli.</p>
            </div>
            <div className='div'>
              <h3>Seafood Vinaigrette <span>£12.75</span></h3>
              <p>Mix of fresh seafood, tarragon vinegar infusion,
              coriander, shallots & mixed peppers served on a
              ciabatta bread.</p>
            </div>
          </div>
          <div className='middle_Part2'>
              <h2>Non - Alcoholic £10</h2>
              <div className='div'>
                <h3>N/A Guava Collins</h3>
                <p>Tanqueray 0.0, Guava Syrup, Lemon Juice, Soda</p>
              </div>
              <div className='div'>
                <h3>Not a Hugo</h3>
                <p>Elderflower Syrup, Mint, Lime Juice, Soda, N/A prosecco</p>
              </div>
              <div className='div'>
                <h3>The Non Alcoholic Fig One</h3>
                <p>Tanqueray 0.0, Fig Syrup, N/A Prosecco</p>
              </div>
              <h2>Draughtbeer</h2>
              <div className='div'>
                <h3>Guinness Pint - <span>£6.50</span></h3>
              </div>
              <div className='div'>
                <h3>Peroni 380ML - <span>£5.50</span></h3>
              </div>
              <div className='div'>
                <h3>Heineken 380ML - <span>£5.00</span></h3>
              </div>
              <div className='div'>
                <h3>Moretti 380ML - <span>£5.50</span></h3>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Menu