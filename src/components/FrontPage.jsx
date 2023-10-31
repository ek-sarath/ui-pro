import React from "react";
import '../App.css';
import LearnMoreIcon from '../assets/learnMoreIcon.svg';
import SocialMediaTree from '../assets/socialMediaTree.svg';

function FileSharingComponent() {
  return (
    <div className="FrontPage">

      <div className="LeftFrontPage">
        <h1>Share text, voice, photos, videos and  GIFs files for free</h1>
        <p>Feugiat primis a ligula undo auctor mauris auctor  laoreet and pretium augue an egestas cubilia</p>
        
        <div className="FrontLeftContainer">
            <button className="LearnMoreButton">Learn More</button>
            <img src={LearnMoreIcon} alt="Learn More" className="LearnMoreIcon"/>See OLMO in Action 
            <br/>14 days free trial <span className="RedPipe">|</span> No Credit card
        </div>

      </div>
        <img src={SocialMediaTree} alt="Social Media Tree" className="SocialMediaTree"/>
    </div>
  );
}

export default FileSharingComponent;
