import React, { Component } from "react";

export default class Footer extends Component {
    render () {
        return (
            <div className="footer-container">
                <img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="" height="50px" width="50px" />
                <p className="footer-font">@instagramPlug</p>
                <br/>
                <img src="https://lh3.googleusercontent.com/proxy/F2evjdKQYuuu4lyQ9Lt0XUVM3HFnM7ljfTngUumd_ayePWzJz-J8wgcBljuJk-GFlc_W_Wy-WTSos2ZFCon-ZXeWMp0G5BDESVafgHvS3V2Mlvjbu-s" alt="" height="50px" width="50px" />
                <p className="footer-font">@twitterPlug</p>
            </div>
        )
    }
}