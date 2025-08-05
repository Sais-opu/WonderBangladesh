import React from 'react';
import MyCarousel from './MyCarousel';
import OfficeMap from './OfficeMap';
import OverviewSection from './OverviewSection';
import TouristStorySection from './touristStorySection';
import TopDestination from './TopDestination';
import TravelTips from './TravelTips';
import TravelBlog from './TravelBlog';


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
            <div>
                <TopDestination></TopDestination>
            </div>
            <div>
                <TravelBlog></TravelBlog>
            </div>
            <div>
                <TravelTips></TravelTips>
            </div>
        </div>
    );
};

export default Home;