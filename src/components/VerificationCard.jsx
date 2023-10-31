import React from "react";
import "../App.css";
import Verification from '../assets/VerificationCard.svg';
import Play from '../assets/PlayStore.svg';

const VerificationCard = () => {
    return (
        <div className='AnnouncementCard'>
            <div className="left-half">
                <img src={Verification} alt='Verification Card' />
            </div>
            <div className="right-half">
                <h2>Chat with your friends easily</h2>
                <p>
                Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
                </p> 
                <h2>Chat with your friends easily</h2>
                <p>
                Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and quaerat
                Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus
                </p> <br/>
                <img src={Play} alt='Play Store'/>
            </div>
        </div>
    );
};

export default VerificationCard;
