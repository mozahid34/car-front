import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({cardInfo}) => {
    const {_id,service_id, title, img, price, description} = cardInfo
    return (
        <div>

<div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure><img src= {img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {/* <p> {description} </p> */}
    <p className='text-left'>Price: $ {price}</p>
    <div className="card-actions justify-end">
    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Service;