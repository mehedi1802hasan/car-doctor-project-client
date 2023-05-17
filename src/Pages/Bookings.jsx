import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import BookingsRow from './BookingsRow';

const Bookings = () => {
    const {user,_id}=useContext(AuthContext);
    const [bookings,setBookings]=useState([])
    const url=`http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    },[])
    const handleConfirm=id=>{
        console.log(id)
          fetch(`http://localhost:5000/bookings/${_id}`,{
          method:"PATCH" ,
         headers:
          { 'content-type':'application/json'   },
          body:JSON.stringify({status:"confirm"})
          
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
              if(data.modifiedCount>0){
                   //update state
                   const remaining=bookings.filter(booking=>booking._id !== id);
                   const updated =bookings.find(booking =>booking._id ===id);
                   updated.status='confirm'
                   const newBookings=[updated, ...remaining];
                   setBookings(newBookings)
              }
          })}
    return (
        <div>
       <h3>Bookings:{bookings.length}</h3>
       {
        bookings.map(booking=><BookingsRow
        key={booking._id}
        booking={booking}
    handleConfirm={handleConfirm}
        ></BookingsRow>)
       }
        </div>
    );
};

export default Bookings;