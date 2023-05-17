import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const CheckOut = () => {
    const services=useLoaderData();
    const{title,img,price}=services;
    const {user}=useContext(AuthContext)
    const handleOrder=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=form.email.value;
        const price=form.price.value;
        const order={
            name,date,email,price,img,title
        }
        console.log(order)
        fetch('http://localhost:5000/checkout',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('your order successfully send')
            }
        })
     }
    return (
        <div>
   <div className='text-xl font-bold text-red-500'>
    Product Name :- {title}
   </div>
   
   
 
   
      <form onSubmit={handleOrder} className="card-body">
       <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
       <div className=" form-control">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="enter your  name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="" className="input input-bordered" />
        
        </div>
        <div className="mt-6 form-control"> 
        </div>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
       <div className=" form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email"defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="$ price" className="input input-bordered" defaultValue={'$'+ price} />
        
        </div>
        <div className="mt-6 form-control"> 
        </div>
        </div>
          <button className="btn btn-primary">Confirm Order</button>
       
     
      </form>
    </div>
 

  
     
    );
};

export default CheckOut;   <h3>Booking Now</h3>