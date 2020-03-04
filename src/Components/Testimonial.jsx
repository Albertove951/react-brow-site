import React, { Component } from "react";
import TestimonialContent from "./TestimonialContent"

export default class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial-container">
                {TestimonialContent.map((testimonial, i) => (
                    <div className="testimonial-card">
                        <img src={testimonial.img} alt="" className="testimonial-img" />
                        <p>"{testimonial.content}"</p>
                    </div>
                ))}
            </div>
        )
    }
}