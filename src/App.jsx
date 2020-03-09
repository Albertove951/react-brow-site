import React, { Component } from 'react';
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Service from "./Components/Service"
import Footer from "./Components/Footer";
import Calendar from "./Components/Calendar"
import Location from "./Components/Location"
import Testimonial from "./Components/Testimonial"

import "./style.scss"

export default class App extends Component {

  render() {
    return (
      <div className="background">
        <Header />
        {/* <div className="void"> */}
        <h3 className="font">something to fill the void</h3>
        <p className="void">
          Pharetra pharetra massa massa ultricies mi. Felis imperdiet proin fermentum leo vel orci porta non. Lacus
           vestibulum sed arcu non odio. Fusce ut placerat orci nulla. In ornare quam viverra orci sagittis eu
           volutpat odio. Consequat nisl vel pretium lectus quam id leo. Enim nec dui nunc mattis enim ut tellus.
           Lacus sed turpis tincidunt id aliquet risus feugiat in. Eu tincidunt tortor aliquam nulla. Rhoncus urna
           neque viverra justo nec ultrices dui.
           </p>
        {/* </div> */}
          <AboutMe />
          <Service />
          <Testimonial />
          <Calendar />
          <Location />
        <Footer />
      </div>
    )
  }

}