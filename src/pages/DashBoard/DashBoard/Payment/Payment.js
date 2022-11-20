import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const { treatement, price, appointmentDate, slot } = booking;

    return (
        <div>
            <h3 className="text-3xl">Payment for {treatement}</h3>
            <p className='text-3xl'>Please pay <strong>${price}</strong> for your appoinment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;