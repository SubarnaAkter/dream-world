import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBookings = () => {
       const {user}=useAuth()
    const [myBookings,setMyBookings]=useState([])
    useEffect(()=>{
        fetch(`https://shrouded-peak-64401.herokuapp.com/bookings`)
        .then(res=>res.json())
        .then(data=>{
          const myBookings=  data.filter(order=>order.email===user.email)
          setMyBookings(myBookings)
        });
       },[]);

    //    handle delete
       const handleCancelBooking=(id)=>{
               const confirmed=window.confirm("Want to Delete Your Booking?");

               if(confirmed){
                fetch(`https://shrouded-peak-64401.herokuapp.com/bookings/${id}`,{
                    method:"DELETE",
                })
                .then(res=>res.json())
                .then(data=>{
                    
                
                 if(data.deletedCount>0){
                     alert("Booking Canceled");
                     const remaining=myBookings.filter(myBooking=>myBooking._id!==id)
                     setMyBookings(remaining)
                 }
 
                })
               }
       }
    return (
        <div>
          {
              myBookings.map(myBooking=> <Card key={myBooking.key} className="shadow m-5 w-75 mx-auto"> 
               
              <Card.Body>
                  <Card.Title>{myBooking.name}</Card.Title>
                  <Card.Text>
                      Address: {myBooking.address}
                  </Card.Text>
                  <Card.Text>
                      Contact No : {myBooking.contact}
                  </Card.Text>
                  <Card.Text>
                      Package: {myBooking.packageName}               
                  </Card.Text>
                  <Card.Text>
                      Status: {myBooking.status}               
                  </Card.Text>
                 
                  <Button onClick={()=>{
                      handleCancelBooking(myBooking._id)
                  }} variant="danger" className="mx-1">Cancel Booking</Button>
                  
              </Card.Body>
          </Card>)
          }
        </div>
    );
};

export default MyBookings;