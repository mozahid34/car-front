import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/404/Frame.png'

const NotFound = () => {
    return (
        <div  className='img'>

            <img className='text-center mx-auto my-auto' src= {notFound} alt="404" />
            <Link className='btn btn-circle bg-orange-500 w-24 h-24' to='/'> Back To Home</Link>
            
        </div>
    );
};

export default NotFound;