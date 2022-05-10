
import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';


const Home = () => {
    return (
        <div className="px-20">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;