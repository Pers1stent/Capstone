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
                <h3>Roast Almonds</h3>
                <p>Roasted in paprika & garlic</p>
              </div>
              <div className='div'>
                <h3>Mixed Carmona Olives </h3>
                <p>Marinated olives from the Andalusian region</p>
              </div>
              <div className='div'>
                <h3>Selection of Breads €4.50</h3>
                <p>Selection of artisan breads, aged balsamic & olive oil</p>
              </div>
              <div className='div'>
                <h3>House Focaccia & Dips</h3>
                <p>Our in house focaccia served with a selection of dips</p>
              </div>
              <div className='div'>
                <h3>Antipasti</h3>
                <p>Selection of cured meats, cheeses with crackers,
                chutneys & fruit</p> 
              </div>
              <div className='div'>
                <h3>Vegan Sharing Plate</h3>
                <p>Selection of char grilled mixed vegetables, vegan
                cheese, olives, mushroom tapenade, sourdough
                bread</p>
              </div>
              <div className='div'>
                <h3>Patatas Bravas</h3>
                <p>Crispy fried potatoes served with spicy sauce & aioli</p>
              </div>
          </div>
          <div className='right_Part'>
            <h2>Little Seafood bites</h2>
            <div className='div'>
              <h3>Cod al Pil Pil</h3>
              <p>Pan seared fresh Cod, cooked in a Pil Pil sauce with
              capers and chopped parsley.</p>
            </div>
            <div className='div'>
              <h3>Pil Pil Gambas</h3>
              <p>Peeled gambas cooked in rich garlic and red chilli
              olive oil, served with ciabatta bread.</p>
            </div>
            <div className='div'>
              <h3>Mussels</h3>
              <p>Fresh mussels cooked in white wine sauce and
              finished with Mediterranean herb butter.</p> 
              </div>
            <div className='div'>
                <h3>Bouillabaisse</h3>
                <p>Seasonal seafood, in a French Bouillabaisse sauce.</p>
            </div>
            <div className='div'>
                <h3>Calamari Fritti</h3>
                <p>Fried calamari served with lobster aioli.</p>
            </div>
            <div className='div'>
              <h3>Seafood Vinaigrette </h3>
              <p>Mix of fresh seafood, tarragon vinegar infusion,
              coriander, shallots & mixed peppers served on a
              ciabatta bread.</p>
            </div>
          </div>
          <div className='middle_Part2'>
              <h2>Non - Alcoholic €10</h2>
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
                <h3>Guinness Pint - €6.50</h3>
              </div>
              <div className='div'>
                <h3>Peroni 380ML - €5.50</h3>
              </div>
              <div className='div'>
                <h3>Heineken 380ML- €5.00</h3>
              </div>
              <div className='div'>
                <h3>Moretti 380ML - €5.50</h3>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Menu