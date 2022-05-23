import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Info from './Info';
import Parts from './Parts';
import Testimonial from './Testimonial';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Info></Info>
            <BusinessSummary></BusinessSummary>
            <Parts></Parts>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;