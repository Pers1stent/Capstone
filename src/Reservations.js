import React, {useState} from 'react'
import './components/reservations.css'
import Booking from './Booking'
import Main from './Main'




const Reservations = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [hours, setHours] = useState("")

   const handleSubmit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }


  return (
    <>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)}/>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={hours} onChange={(e) => setHours(e.target.value)}>
          <option value="">Select a Time</option>
          {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
          <button className='nice' type="submit">Make your Reservation</button>
      </form>
      </div>
    </>
  )
}

export default Reservations