import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [data, setData] = useState([])
    useEffect( () => {
        fetch('service.json')
            .then (res => res.json())
            .then (d => setData(d) )
    },[])

    return (
        <div>
            <h1 className='text-3xl text-orange-500'>Service: {data.length}</h1>
            <h1 className='text-5xl'>Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid gap-4 mt-8 xm:grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3'>
            {
                    data.map(serv => <Service key={serv._id} cardInfo = {serv} ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;