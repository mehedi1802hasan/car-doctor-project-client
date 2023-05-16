import React from 'react';
import person1 from '../../../../car-doctor-resources/assets/images/about_us/person.jpg'
import parts from '../../../../car-doctor-resources/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row">
  
   <div className='relative lg:w-1/2'>
   <img className='w-3/4 rounded-lg shadow-2xl' src={person1} />
   <img className='absolute w-1/2 border-8 border-white rounded-lg shadow-2xl right-5 top-1/2' src={parts} alt="" />
   </div>
    <div className='lg:w-1/2 sm:mt-20'>
        <h3 className='text-2xl text-orange-600'>About Us</h3>
      <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="pt-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
      <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;