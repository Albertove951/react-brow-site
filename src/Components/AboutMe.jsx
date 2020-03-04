import React, { Component } from "react" ;

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-box">
            <div className="about-me-container">
                    <p className="about-me-title">About Me</p>
                <div>
                    <img src="https://previews.123rf.com/images/lobodaphoto/lobodaphoto1905/lobodaphoto190500096/123512524-beautiful-siberian-husky-puppies-new-born.jpg" alt="" className="about-me-selfie" height="150px" width="150px" />
                </div>
                <br/>
                <p className="about-me-author">Mr. Puppy</p>
                <br/>
                <p className="about-me-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Pharetra vel turpis nunc eget lorem 
                 dolor sed viverra. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Sed arcu non odio euismod lacinia at quis risus sed. Leo a diam sollicitudin tempor id eu nisl. Tellus in metus vulputate eu scelerisque felis. Amet risus nullam eget felis eget nunc lobortis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl
                 rhoncus. Lectus sit amet est placerat in egestas erat imperdiet. Diam volutpat commodo sed egestas egestas. Faucibus interdum posuere lorem ipsum dolor. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                 </p>
            </div>
            <img src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/m2ko97fmmeghc4wzttsc3g.jpg" alt="" className= "about-me-image" />
            </div>
        )
    }
}
