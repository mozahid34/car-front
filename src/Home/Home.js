import React from 'react';
import About from '../About/About';
import Services from '../Componets/Services/Services';
import Banner from '../Pages/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;