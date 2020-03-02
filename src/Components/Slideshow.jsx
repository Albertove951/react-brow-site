import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Slideshow extends Component {
    render() {
        return (
            <div className="slideshow">
                <Carousel 
                width="350px" 
                dynamicHeight="350px" 
                infiniteLoop="true"  
                showIndicators="false"
                autoPlay="true"
                transitionTime="600"
                >
                    <div>
                        <img src="https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"/>
                    </div>
                    <div>
                        <img src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/01/shutterstock_587562362.jpg"/>
                    </div>
                    <div>
                    <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg"/>
                    </div>
                </Carousel>
            </div>
        );
    }
};
