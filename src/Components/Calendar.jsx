import React from "react";
import Iframe from "react-iframe"

const Calendly = () => {
  return (
    <div className="calendar">
      <Iframe
        src="https://calendly.com/albertovega00/puppy-apointment"
        className="iframe"
        width="750px"
        height="850px"
        display="initial"
        position="relative"
        overflow="hidden"
        scrolling="no"
        allowTransparency
        allowFullScreen
      ></Iframe>
    </div>
  );
};

export default Calendly;