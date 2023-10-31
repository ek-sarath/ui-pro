import React from "react";
import "../App.css";
import MainOne from '../assets/mainMobile1.svg';
import MainTwo from '../assets/mainMobile2.svg';

const UserCommands = () => {
  return (
    <div className="AnnouncementCard">
      <div className="left-half">
      <img src={MainOne} alt='Main Mobile 1' className="UserData" />
            <img src={MainTwo} alt='Main Mobile 2' className="UserDatas"/>
      </div>

      <div className="right-half">
        <h4>Make it simpler with Quick Commands</h4>
        <h5>Fringilla risus, luctus mauris orci auctor euismod iaculisluctus magna purus pretium ligula purus undo quaerattempor sapien rutrum mauris quaerat ultrice<br/><br/>
        Quaerat sodales sapien euismod purus blandit<br/><br/>
        Nemo ipsam egestas volute turpis dolores undo ultricealiquam quaerat at sodales sapien purus
        </h5>

        <div className="CharlieTabs">
          <button className="GetButton">Let's Get Started</button>
          <button className="PricingButton">View Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default UserCommands;
