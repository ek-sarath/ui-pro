import React from "react";
import '../App.css';
import LowData from '../assets/lowData.svg';

const WhiteCard = () => {

  return (
    <div className="whiteCard">
        <img src={LowData} alt='Low Data' className="SendMessage"/>

           <div className="GroupContainer">
              <h7>Lowest Data Usage</h7><br/>
              <h8>with Encrypted Messaging</h8>
           </div>
    </div>
  );
};

export default WhiteCard;
