import React from "react";
import '../App.css';
import Group19 from '../assets/Group19.svg';
import LearnMoreIcon from '../assets/LearnMoreIcon.svg';

function FileSharingComponent(props) {
  return (
    <div className="Centre">

     <div className="LeftSocial">
      <h1>
        Share text, voice,<br/> photos, videos and <br/> GIFs files for free
         </h1>
          <p>Feugiat primis a ligula undo auctor mauris auctor <br/> laoreet and pretium augue an egestas cubilia</p>
          <button class="LearnMoreButton">Learn More</button>
          <img src={LearnMoreIcon} alt="Laern More"/>
          See OLMO in Action
      </div>

         <div className="SocialTree">
          <img src={Group19} alt="Group 19"/>
         </div>
    </div>
  );
}

export default FileSharingComponent;
