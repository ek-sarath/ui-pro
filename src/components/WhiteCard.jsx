import React from "react";
import '../App.css';
import SendMsg from '../assets/sendMessage.svg';

const WhiteCard = () => {

  return (
    <div className="whiteCard">
        <img src={SendMsg} alt='Send Message' className="SendMessage"/>

           <div className="GroupContainer">
              <h7>Send Group Messages</h7><br/>
              <h8>to your lists of contacts</h8>
           </div>
    </div>
    
  );
};

export default WhiteCard;
