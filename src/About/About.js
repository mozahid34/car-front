import React from 'react';
import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src= {person} className="max-w-md rounded-lg shadow-2xl" alt='About Image' />
    <img src= {parts} className=" w-1/2 absolute right-8 top-48 border-white border-8 rounded-lg shadow-2xl" alt='About Image' />
    
    </div>

    <div className='w-1/2 text-left'>
    <h1 className='text-3xl font-bold text-orange-500' >About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <button className="btn bg-orange-500">Get More Info</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default About;