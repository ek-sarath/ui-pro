import React from "react";
import "../App.css";
import Announcement from '../assets/AnnouncementCard.svg';

const AnnouncementCard = () => {
    return (
        <div className='AnnouncementCard'>
            <div className="left-half">
                <img src={Announcement} alt='Announcement Card' />
            </div>
            <div className="right-half">
                <h1>Share files, media, and locations</h1>
                <p>
                Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute<br/><br/>Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
                </p>
            </div>
        </div>
    );
};

export default AnnouncementCard;
