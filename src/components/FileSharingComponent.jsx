import React from "react";
import '../App.css';
import Group19 from '../assets/Group19.svg';
import LearnMoreIcon from '../assets/LearnMoreIcon.svg';

function FileSharingComponent(props) {
  return (
    <div className="Centre">
      <div className="LeftSocial">
        <h1>
          Share text, voice, photos, videos and  GIFs files for free
        </h1>
        <p>Feugiat primis a ligula undo auctor mauris auctor  laoreet and pretium augue an egestas cubilia</p>
        
        <div className="Olmo">
        <button className="LearnMoreButton">Learn More</button>
        <img src={LearnMoreIcon} alt="Learn More"/>
        See OLMO in Action<br/>14 days free trial <span className="RedPipe">|</span>No Credit card
        </div>
      </div>

      <div className="SocialTree">
        <img src={Group19} alt="Group 19"/>
      </div>
    </div>
  );
}

export default FileSharingComponent;
