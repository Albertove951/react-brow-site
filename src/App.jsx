import React, { Component } from 'react';
import Header from "./Components/Header";
import Slideshow from "./Components/Slideshow";
import AboutMe from "./Components/AboutMe";
import Service from "./Components/Service"
import Footer from "./Components/Footer";
import Calendar from "./Components/Calendar"
import Testimonial from "./Components/Testimonial"

import "./style.scss"

export default class App extends Component {
 
    render() {
      return(
        <div className="background">
        <Header/>
        <Slideshow/>
        <AboutMe/>
        <Service/>
        <Testimonial/>
        <Calendar/>
        <Footer/>
        </div>
      )
    }
    
  }