import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Provider/authProvider';
import { Link } from 'react-router-dom';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setBookings(data);
                } else {
                    console.error('Expected an array but received:', data);
                    setBookings([]);
                }
            })
            .catch((error) => console.error('Error fetching bookings:', error))
            .finally(() => setLoading(false));
    }, [user]);

    const handleCancel = async (bookingId) => {
        try {
            const response = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                setBookings((prev) => prev.filter((booking) => booking._id !== bookingId));
            }
        } catch (error) {
            console.error('Error cancelling booking:', error);
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl text-center font-semibold text-gray-800 mb-4 sm:mb-6">
                My Bookings
            </h2>
            {loading ? (
                <p className="text-center ">Loading bookings...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse text-sm sm:text-base text-center text-gray-700">
                        <thead>
                            <tr className="bg-[#008080]">
                                <th className="px-2 sm:px-4 py-2">Package</th>
                                <th className="px-2 sm:px-4 py-2">Tour Guide</th>
                                <th className="px-2 sm:px-4 py-2">Tour Date</th>
                                <th className="px-2 sm:px-4 py-2">Price</th>
                                <th className="px-2 sm:px-4 py-2">Status</th>
                                <th className="px-2 sm:px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(bookings) && bookings.length > 0 ? (
                                bookings.map((booking) => (
                                    <tr
                                        key={booking._id}
                                        className="border-b hover:bg-gray-100"
                                    >
                                        <td className="px-2 sm:px-4 py-2">{booking.packageName}</td>
                                        <td className="px-2 sm:px-4 py-2">{booking.guideName}</td>
                                        <td className="px-2 sm:px-4 py-2">
                                            {new Date(booking.tourDate).toLocaleDateString()}
                                        </td>
                                        <td className="px-2 sm:px-4 py-2">
                                            ${booking.price.toFixed(2)}
                                        </td>
                                        <td className="px-2 sm:px-4 py-2">{booking.status}</td>
                                        <td className="px-2 sm:px-4 py-2 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                                            {booking.status === 'pending' ? (
                                                <>
                                                    <Link
                                                        to={`/payment/${booking._id}`}
                                                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
                                                    >
                                                        Pay
                                                    </Link>
                                                    <button
                                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                                        onClick={() => handleCancel(booking._id)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <span className="text-gray-500">No actions available</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center text-gray-500 py-4"
                                    >
                                        No bookings found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyBooking;
