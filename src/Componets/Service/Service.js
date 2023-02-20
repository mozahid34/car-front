import React from 'react';

const Service = ({cardInfo}) => {
    const {service_id, title, img, price, description} = cardInfo
    return (
        <div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {/* <p> {description} </p> */}
    <p className='text-left'>Price: $ {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Service;