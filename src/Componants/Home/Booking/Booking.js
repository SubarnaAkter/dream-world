import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Booking = () => {
    const {packageId}=useParams();
    const [booking,setBooking]=useState({});
    const {user}=useAuth();

    useEffect(()=>{
     fetch(`https://shrouded-peak-64401.herokuapp.com/packages/${packageId}`)
     .then(res=>res.json())
     .then(data=>setBooking(data));
    },[]);
    const { register, handleSubmit } = useForm();
    ///post
  const onSubmit = data => {
     axios.post('https://shrouded-peak-64401.herokuapp.com/bookings',data)
     .then(res=>{
      if(res.data.insertedId)
      {
          alert("Order Placed Successfully")
      }
     })
  }
    return (
        <div>
        <h5 className="bg-success my-5 p-3 text-white ">{booking.packageName} is added to your order List</h5>

     <div className="container my-5">
     <div className="row  g-4 my-5">
  <div className="col-12 col-md-7">
    <div className="card d-flex flex-md-row  flex-col">
      <img src={booking.img} className="w-50 " alt="..."/>
      <div className="card-body text-start">
        <h5 className="card-title">{booking.packageName}</h5>
        <p className="card-text">{booking.details}.</p>
        <h5 className="card-title">$ {booking.fee}/person</h5>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-5">
    <div>
    <form  className="" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} className="w-100 p-2 m-1" type="text" {...register("name")} readOnly /> <br />
      <input   defaultValue={user.email} className="w-100 p-2 m-1" type="email" {...register("email")} readOnly/> <br />
      <input  placeholder="Enter Package Name" className="w-100 p-2 m-1" type="text" {...register("packageName")} required /> <br />
      <input placeholder="Enter your Address"  className="w-100 p-2 m-1 " type="text" {...register("address")} /> <br />
      <input placeholder="Enter Contact No."  className="w-100 p-2 m-1" type="number" {...register("contact")} /> <br />
      <input   defaultValue="pending" className="w-100 p-2 m-1" type="text" {...register("status")} hidden/> <br />
      <input className="w-100 p-2 m-1" type="submit" value="Place Order" />
    </form>
    </div>
  </div>
 
 
</div>
     </div>
        </div>
    );
};

export default Booking;