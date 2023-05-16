import React from 'react';
import img1 from '../../../../car-doctor-resources/assets/images/banner/1.jpg'
import img2 from  '../../../../car-doctor-resources/assets/images/banner/2.jpg'
import img3 from  '../../../../car-doctor-resources/assets/images/banner/3.jpg'
const Banner = () => {
    return (
        <div className="w-full carousel h-[600px]">
        <div id="slide1" className="relative w-full carousel-item">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute bottom-0 flex transform items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
            <div className='w-1/3 text-white pl-28'>
                <h3 className='font-bold md:text-4xl'>Affordable Price For Car Servicing</h3>
                <p className='my-6 font-bold md:text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='md:flex lg:flex'><button className='btn btn-primary'>Discover More</button>
                <button className='ml-4 btn btn-secondary'>Latest Project</button ></div>
            </div>
          </div>
          
          <div className="absolute bottom-0 flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="relative w-full carousel-item">
          <img src={img2} className="w-full rounded-xl" />
          
          <div className="absolute bottom-0 flex transform items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
            <div className='w-1/3 text-white pl-28'>
                <h3 className='font-bold md:text-5xl'>Affordable Price For Car Servicing</h3>
                <p className='my-6 font-bold md:text-3xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='md:flex lg:flex'><button className='btn btn-primary'>Discover More</button>
                <button className='ml-4 btn btn-secondary'>Latest Project</button ></div>
            </div>
          </div>
          <div className="absolute bottom-0 flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="relative w-full carousel-item">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute bottom-0 flex transform items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full">
            <div className='w-1/3 text-white pl-28'>
                <h3 className='font-bold md:text-5xl'>Affordable Price For Car Servicing</h3>
                <p className='my-6 font-bold md:text-3xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='md:flex lg:flex'><button className='btn btn-primary'>Discover More</button>
                <button className='ml-4 btn btn-secondary'>Latest Project</button ></div>
            </div>
          </div>
          <div className="absolute bottom-0 flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
     
      </div>
    );
};

export default Banner;