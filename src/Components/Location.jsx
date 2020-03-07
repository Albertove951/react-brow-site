import React, { Component } from "react";
import IFrame from "react-iframe"

export default class Location extends Component {

    render() {
        return (
            <div className="location-container">
                <IFrame
                src="https://www.google.com/maps/place/Fullerton,+CA/@33.8894577,-117.9595816,13z/data=!3m1!4b1!4m5!3m4!1s0x80dd2a74c381cb63:0xf59c53811e60ea4a!8m2!3d33.8703645!4d-117.9242123"
                className="location"
               >
                </IFrame>
                <div className="location-content">
                    <p>Location</p>
                </div>
                
            </div>
        )
    }
}