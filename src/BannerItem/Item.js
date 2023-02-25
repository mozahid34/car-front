import React from 'react';

const Item = ({slide}) => {
    const { image, text, next, prev} = slide;
    

    return (
        <div id= {`slide${slide.id}`} className="carousel-item relative rounded-xl w-full h-96 overflow-hidden">
          
          <div className='slider'>
            <img src={image} className="w-full " />

          </div>
          
            
   

   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   <div className=' w-1/3 text-white'>
     <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
     <p>{text}</p>
     <button className="btn btn-error">Discover More</button>
     <button className="btn btn-outline ml-2">Latest Project</button>
   </div>
   </div>
   

   <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
     <a href= {`#slide${prev}`} className="btn btn-circle mr-2">❮</a> 
     <a href= {`#slide${next}`} className="btn btn-circle bg-red-600">❯</a>
   </div>
        </div>
    );
};

export default Item;