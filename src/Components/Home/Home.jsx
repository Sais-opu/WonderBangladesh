import React from 'react';
import MyCarousel from './MyCarousel';
import OfficeMap from './OfficeMap';
import OverviewSection from './OverviewSection';
import TouristStorySection from './touristStorySection';


const Home = () => {
    return (
        <div>
            <MyCarousel></MyCarousel>
            <div>
                <OfficeMap></OfficeMap>
            </div>
            <div>
                <OverviewSection></OverviewSection>
            </div>
            <div>
                <TouristStorySection></TouristStorySection>
            </div>
        </div>
    );
};

export default Home;