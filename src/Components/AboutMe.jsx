import React, { Component } from "react" ;
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"

export default class AboutMe extends Component {
    render() {
        return (
            <div  id="about-me"className="about-me-box">
            <div className="about-me-container">
                    <p className="about-me-title">About Me</p>
                <div>
                    <img src="https://previews.123rf.com/images/lobodaphoto/lobodaphoto1905/lobodaphoto190500096/123512524-beautiful-siberian-husky-puppies-new-born.jpg" alt="" className="about-me-selfie" />
                </div>
                <br/>
                <p className="about-me-author">Mr. Puppy</p>
                <br/>
                <p className="about-me-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Pharetra vel turpis nunc eget lorem 
                 dolor sed viverra. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Sed arcu non odio euismod lacinia at quis risus sed. Leo a diam sollicitudin tempor id eu nisl. Tellus in metus vulputate eu scelerisque felis. Amet risus nullam eget felis eget nunc lobortis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl
                 rhoncus. Lectus sit amet est placerat in egestas erat imperdiet. Diam volutpat commodo sed egestas egestas. Faucibus interdum posuere lorem ipsum dolor. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                 </p>
            </div>



            <div className="slideshow">
                <Carousel 
                dynamicHeight={true} 
                infiniteLoop={true}  
                autoPlay={true}
                interval={4500}
                transitionTime={600}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                >
                    <div>
                        <img src="https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg" height="700px"/>
                    </div>
                    <div>
                        <img src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/01/shutterstock_587562362.jpg" height="700px"/>
                    </div>
                    <div> 
                    <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg" height="700px"/>
                    </div>
                    <div>
                    <img src="https://thehappypuppysite.com/wp-content/uploads/2018/04/when-can-puppies-go-outside-header.jpg" height="700px"/>
                    </div>
                    <div>
                    <img src="https://images.contentful.com/sv9mtllmoeui/5Ecs61hwmQIOa8sUgcWMKA/a5fa9799cbc6ce8c3a3cd335fccf4c25/blog_05.jpg" height="700px"/>
                    </div>
                    <div>
                    <img src="https://www.gannett-cdn.com/presto/2019/12/18/USAT/5c51582a-64cb-4079-8584-b7bdf9dae701-GettyImages-1130714351.jpg" height="700px"/>
                    </div>
                </Carousel>
            </div>
            






            </div>
        )
    }
}
