import React, { Component } from 'react';
import Header from "./Components/Header";
import Slideshow from "./Components/Slideshow";
import AboutMe from "./Components/AboutMe";

import "./header.css"
import "./style.css"

export default class App extends Component {
 
    render() {
      return(
        <div className="background">
        <Header/>
        <AboutMe/>
        <Slideshow/>
        </div>
      )
    }
    
  }