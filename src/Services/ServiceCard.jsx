import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    const {_id,title,img,price}=service;
    return (
        <div className="shadow-xl card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
         
         <div className='flex justify-between'>
            <p className='text-xl text-orange-500'>Price: ${price}</p>
           <Link to={`/checkout/${_id}`}> <button><FaBeer/>X</button></Link>
         </div>
         </div>
      </div>
    );
};

export default ServiceCard;