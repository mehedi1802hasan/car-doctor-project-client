import React from 'react';
import { useState,useEffect } from 'react';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='mt-16 text-center'>
               <h5 className='text-xl text-orange-500'>Service</h5>
                <h3 className='my-5 text-4xl font-bold'>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                  services.map(service=>
                  <ServiceCard
                  key={service._id}
                  service={service}
                
                  >
                  </ServiceCard> )  
                }
            </div>
        </div>
    );
};

export default Services;