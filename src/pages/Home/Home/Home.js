import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;