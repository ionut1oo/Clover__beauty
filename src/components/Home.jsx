import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/home.css";


const Home = () => {
        return (
          <section  id="acasă"> 
           <h1 className='home__title'>Salon Clover Beauty - Frumusețea ta este <br /> misiunea noastră</h1> 
          <Carousel autoPlay infiniteLoop>
                <div>
                    <img src="imgs/img1.jpg" alt="img1" 
                    className='carousel_img' />
                    <p className="legend">Clover Beauty</p>
                </div>
                <div>
                    <img src="imgs/img2.jpg" alt="img2" 
                    className='carousel_img' />
                    <p className="legend">Clover Beauty</p>
                </div>
                <div>
                    <img src="imgs/img3.jpg" alt="img3" 
                    className='carousel_img' />
                    <p className="legend">Clover Beauty</p>
                </div>
                <div>
                    <img src="imgs/img4.jpg" alt="img4" 
                    className='carousel_img' />
                    <p className="legend">Clover Beauty</p>
                </div>
                <div>
                    <img src="imgs/img5.jpg" alt="img5" 
                    className='carousel_img' />
                    <p className="legend">Clover Beauty</p>
                </div>
                <div>
                    <img src="imgs/img6.jpg" alt="img6" 
                    className='carousel_img' />
                    <p className="legend">Clover Beauty</p>
                </div>
            </Carousel>
            </section>
        );
    };

    export default Home;