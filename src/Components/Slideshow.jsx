import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Slideshow extends Component {
    render() {
        return (
            <div className="slideshow-container" >
            <div className="slideshow">
                <Carousel 
                width="700px" 
                dynamicHeight={true} 
                infiniteLoop={true}  
                autoPlay={true}
                interval={4500}
                transitionTime={600}
                showIndicators={false}
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
                    <div>
                    <img src="https://thehappypuppysite.com/wp-content/uploads/2018/04/when-can-puppies-go-outside-header.jpg"/>
                    </div>
                    <div>
                    <img src="https://images.contentful.com/sv9mtllmoeui/5Ecs61hwmQIOa8sUgcWMKA/a5fa9799cbc6ce8c3a3cd335fccf4c25/blog_05.jpg"/>
                    </div>
                    <div>
                    <img src="https://www.gannett-cdn.com/presto/2019/12/18/USAT/5c51582a-64cb-4079-8584-b7bdf9dae701-GettyImages-1130714351.jpg"/>
                    </div>
                </Carousel>
            </div>
            </div>
        );
    }
};
