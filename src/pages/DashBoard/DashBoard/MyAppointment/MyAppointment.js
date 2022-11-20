import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:8000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings);

    return (
        <div>
            <h3 className="text-3xl mb-5">My Appoinments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Name</td>
                            <td>Treatment</td>
                            <td>Date</td>
                            <td>Time</td>
                            <td>Payment</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, index) => <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <th>{booking.patient}</th>
                                <th>{booking.treatment}</th>
                                <th>{booking.appointmentDate}</th>
                                <th>{booking.slot}</th>
                                <th>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button></Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;