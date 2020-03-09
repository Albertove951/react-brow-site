import React, { Component } from "react";

export default class Header extends Component {
    constructor(props){
        super(props);
    
        this.onScrollAboutMe = this.onScrollAboutMe.bind(this);
        this.onScrollService = this.onScrollService.bind(this);
        this.onScrollTestimonial = this.onScrollTestimonial.bind(this);
        this.onScrollCalendar = this.onScrollCalendar.bind(this);
        this.onScrollLocation = this.onScrollLocation.bind(this);
    }

    // change to all run on one function
    onScrollAboutMe() {
        let element = document.getElementById("about-me");
        element.scrollIntoView({behavior: "smooth"});
    }

    onScrollService() {
        let element = document.getElementById("service");
        element.scrollIntoView({behavior: "smooth"});
    }

    onScrollTestimonial() {
        let element = document.getElementById("testimonial");
        element.scrollIntoView({behavior: "smooth"});
    }

    onScrollCalendar() {
        let element = document.getElementById("calendar");
        element.scrollIntoView({behavior: "smooth"});
    }

    onScrollLocation() {
        let element = document.getElementById("Location");
        element.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div className="header ">
                <h3 className="header-title ">My Website.</h3>
                <div className="container">
                    <div className="header-row">
                        {/* <div className="vertical-line"></div>
                        <p className="contact">Contact Me</p> */}
                        <div className="header-line"></div>
                        <p className="contact" onClick={this.onScrollAboutMe}>About me</p>
                        <div className="header-line"></div>
                        <p className="contact" onClick={this.onScrollService}>Services</p>
                        <div className="header-line"></div>
                        <p className="contact" onClick={this.onScrollTestimonial}>Testimonials</p>
                        <div className="header-line"></div>
                        <p className="contact" onClick={this.onScrollCalendar}>Appointments</p>
                        <div className="header-line"></div>
                        <p className="contact" onClick={this.onScrollLocation}>Location</p>
                    </div>
                </div>
            </div>
        )
    }
}