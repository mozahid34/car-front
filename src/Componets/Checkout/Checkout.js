import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Checkout = () => {
    //  const {id, title} = useParams();
 
    
    const { id, title, price } = useLoaderData();
    return (
        <div>
            <h1>Hello</h1>
            <h1> {id} </h1>
            <p> {title}</p>
        </div>
    );
};

export default Checkout;