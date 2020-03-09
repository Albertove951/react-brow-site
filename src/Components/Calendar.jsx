import React from "react";
import Iframe from "react-iframe"

const Calendly = () => {
  return (
    <div id="calendar" className="calendar-container">
      <div className="calendar-content">
        <p className="calendar-title">Book An Appointment</p>
        <div className="calendar-schedule">
          <p>My Schedule</p>
          <p>Mon - Fri </p>
          <p>5:00am - 5:00pm</p>
        </div>
      </div>
      <Iframe
        src="https://calendly.com/albertovega00/puppy-apointment"
        className="iframe"
        overflow="hidden"
        scrolling={false}
        align
      ></Iframe>
    </div>
  );
};

export default Calendly;