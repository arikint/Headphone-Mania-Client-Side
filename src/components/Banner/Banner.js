import React from 'react';
import banner1 from '../../images/banners7.png';
import banner2 from '../../images/banners9.png';
import banner3 from '../../images/banners8.png';
import './Banner.css';
/* --------------------------------------------
 -----Showing banner component------------
 ---------------------------------------------*/
const Banner = () => {

/* ----------------------------------------------------
 -----banner component to be rendered on the UI--------
 -----------------------------------------------------*/

    return (
<div className="container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div>
           <div className="carousel-inner">
             <div className="carousel-item active">
             <img src={banner1} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Amazing Sound</h5>
                 <p>Our Headphones have one of the best sound quality anyone can offer. Our team works really hard to bring out the most amazing headphones from all around the world. We have deals with a lot of top companies.</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={banner2} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Comfortable to Wear</h5>
                 <p>Our headphones are always so Comfortable to wear. We keep in mind that if a user is not able to wear it for long, no matter how good it is, he will not be able to enjoy it fully. </p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={banner3} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Affordable Price</h5>
                 <p>We offer the most amazing Headphones with the most affordable price. We are comitted to our customers and their concern is our highest priority. Our pricing is well defined and a result of efficient management.</p>
               </div>
             </div>
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
</div>
    );
            };
            export default Banner;