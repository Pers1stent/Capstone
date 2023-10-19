import React from "react";
import Reservations from "./Reservations";
import { useState } from "react";

const Booking = (props) => {



    return (

        <Reservations availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;