import React, { Component } from "react";

export default class Header extends Component {

    render() {
        return (
            <div className="header ">
                <h3 className="header-title ">My Website.</h3>
                <div className="container">
                    <div className="header-row">
                        <div className="vertical-line"></div>
                        <p className="contact">Contact Me</p>
                        <div className="vertical-line"></div>
                        <p className="contact">Location</p>
                        <div className="vertical-line"></div>
                        <p className="contact">Appointments</p>
                        <div className="vertical-line"></div>
                        <p className="contact">Services</p>
                        <div className="vertical-line"></div>
                        <p className="contact">About me</p>
                        <div className="vertical-line"></div>
                        <p className="contact">Testimonials</p>
                    </div>
                </div>
            </div>
        )
    }
}