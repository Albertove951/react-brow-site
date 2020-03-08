import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-img">
                    <img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="" className="footer-plug"/>
                    <p className="footer-font">@instagramPlug</p>
                </div>
                <div className="footer-img">
                    <img src="https://www.mountainstatesgenetics.org/wp-content/uploads/sites/257/2019/07/transparent-twitter-logo-wwwimgkidcom-the-image-kid-2605.png" alt="" className="footer-plug"/>
                    <p className="footer-font">@twitterPlug</p>
                </div>
            </div>
        )
    }
}