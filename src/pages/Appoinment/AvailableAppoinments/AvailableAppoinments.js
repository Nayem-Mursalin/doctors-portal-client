import React from 'react';
import { format } from 'date-fns';

const AvailableAppoinments = ({ selectedDate }) => {
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Appoinment on: {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppoinments;