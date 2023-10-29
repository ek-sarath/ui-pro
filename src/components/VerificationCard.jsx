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
                Quaerat sodales sapien euismod blandit at vitae ipsum<br/> primis undo and cubilia laoreet augue and luctus magna<br/> dolor luctus at egestas sapien vitae nemo egestas volute<br/> and turpis dolores aliquam quaerat sodales a sapien
                </p> <br/>
                <h2>Chat with your friends easily</h2>
                <p>
                Fringilla risus, luctus mauris auctor euismod an iaculis<br/> luctus magna purus pretium ligula purus and quaerat<br/><br/>
                Nemo ipsam egestas volute turpis dolores undo ultrice<br/> aliquam quaerat at sodales sapien purus
                </p> <br/><br/>
                <img src={Play} alt='Play Store'/>
            </div>
        </div>
    );
};

export default VerificationCard;
