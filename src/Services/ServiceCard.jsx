import React from 'react';
import { FaBeer } from 'react-icons/fa';
const ServiceCard = ({service}) => {
    const {title,img,price}=service;
    return (
        <div className="shadow-xl card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
         
         <div className='flex justify-between'>
            <p className='text-xl text-orange-500'>Price: ${price}</p>
            <button><FaBeer/>X</button>
         </div>
         </div>
      </div>
    );
};

export default ServiceCard;