import React, { Component } from 'react';
import Header from "./Components/Header";
import Slideshow from "./Components/Slideshow";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Calendar from "./Components/Calendar"

import "./style.css"

export default class App extends Component {
 
    render() {
      return(
        <div className="background">
        <Header/>
        <Slideshow/>
        <AboutMe/>
        {/* <div className="bottom-line" ></div> */}
        <Calendar/>
        <Footer/>
        </div>
      )
    }
    
  }