import React, { Component } from "react";
import TestimonialContent from "./TestimonialContent"

export default class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial-container" id="testimonial">
                <div className="testimonial-line"></div>
                <p className="testimonial-title">Testimonials.</p>
                {TestimonialContent.map((testimonial, i) => (
                    <div key={i} className="testimonial-card">
                        <img src={testimonial.img} alt="" className="testimonial-img" />
                        <p>"{testimonial.content}"</p>
                    </div>
                ))}
                <div className="testimonial-line"></div>
            </div>
        )
    }
}