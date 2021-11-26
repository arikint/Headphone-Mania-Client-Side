import React from 'react';
import Banner from '../Banner/Banner';
import AllHeadphones from '../Headphones/Headphones';
import TopRated from '../TopRated/TopRated';
import Reviews from '../Reviews/Reviews';
import './Home.css';
/* --------------------------------------------
 -----Showing home component------------
 ---------------------------------------------*/
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <h1>Some of our Headphones</h1>
            <AllHeadphones></AllHeadphones>
            <h1>Reviews from Customers</h1>
            <Reviews></Reviews>
            <h1>Top Rated Brands</h1>
            <TopRated></TopRated>
        </div>
    );
};

export default Home;