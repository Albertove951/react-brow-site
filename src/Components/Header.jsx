import React, {Component} from "react";

export default class Header extends Component {

render() {
    return(
        <div className="header ">
            <h3 className="header-font font-color">My Website</h3>
            <div className="line"></div>
            <div className="container">
            <p className="contact">Contact Me: email@gmail.com, (714)9282-209</p>
            </div>
        </div>
    )
}
}