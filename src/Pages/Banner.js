import React from 'react';
import img1 from "../assets/images/banner/1.jpg"
import img2 from "../assets/images/banner/2.jpg"
import img3 from "../assets/images/banner/3.jpg"
import img4 from "../assets/images/banner/4.jpg"
import Item from '../BannerItem/Item';


const Banner = () => {
  const bannerData = [
    {
      id: 1,
      image: img1,
      text: "Affordable Price For Car Servicing",
      prev: 4,
      next: 2,
    },
    {
      id: 2,
      image: img2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, magnam!",
      prev: 1,
      next: 3,
    },
    {
      id: 3,
      image: img3,
      text: "This is text for slider 3.Lorem, ipsum dolor sit amet co",
      prev: 2,
      next: 4,
    },
    {
      id: 4,
      image: img4,
      text: "This is text for slider 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, magnam!",
      prev: 3,
      next: 1,
    }
  ]
    return (
        <div>
            <div className="carousel w-full">
         

             
      

            {
              bannerData.map(slide => <Item key={slide.id} slide ={slide} ></Item> )
            }

       

              

             
  


  

</div>
        </div>
    );
};

export default Banner;