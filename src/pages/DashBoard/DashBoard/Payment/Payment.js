import React from 'react';
import { useLoaderData } from 'react-router-dom';

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