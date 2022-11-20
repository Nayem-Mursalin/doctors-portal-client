import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;

    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className='text-3xl'>Please pay <strong>${price}</strong> for your appoinment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkoutform
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;