
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllBooking = () => {
    const [allBooking, setAllBooking] = useState([]);
    
    useEffect(() => {
        fetch(`https://shrouded-peak-64401.herokuapp.com/bookings`)
            .then(res => res.json())
            .then(data => setAllBooking(data)
            );
    }, []);
  
    const handleCancel = (id) => {
        const cancelConfirmed = window.confirm("Are you Sure? You want to Cancel this Booking!");

        if (cancelConfirmed) {
            fetch(`https://shrouded-peak-64401.herokuapp.com/bookings/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {


                    if (data.deletedCount > 0) {
                        alert("Booking Canceled?");
                        const remaining = allBooking.filter(booking => booking._id !== id)
                        setAllBooking(remaining)
                    }

                })
        }
    }
    ///update status
   

    const handleConfirm = (id) => {
       
        
        fetch(`https://shrouded-peak-64401.herokuapp.com/bookings/${id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allBooking)
        })
            .then(res => res.json())
            .then(data => {

              
                if (data.modifiedCount > 0) {
                    alert("Booking Confirmed");
                   
                }
            })
           
        
    }
    return (
        <div>


            <div className="container my-5">
                <h1>All Bookings</h1>
                <Table responsive striped bordered hover className="m-5 ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Package Name</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBooking.map(booking => <tr
                                key={booking.key} >

                                <td >{booking.name}</td>

                                <td>{booking.contact}</td>
                                <td>{booking.packageName}</td>
                                <td >{booking.status}</td>
                                <td >
                                    <button  onClick={() => {
                                        handleConfirm(booking._id)}
                                        } className="me-3 btn btn-success">Confirm Booking
                                    </button>

                                    <button onClick={() => {
                                        handleCancel(booking._id)
                                    }} className="mx-3 btn btn-danger">Cancel Booking
                                    </button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </Table>
            </div>


        </div >
    );
};

export default ManageAllBooking;