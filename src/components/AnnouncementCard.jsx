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
                <h1>Share files, media,<br/> and locations</h1>
                <p>
                    Quaerat sodales sapien euismod blandit purus a<br/> purus ipsum primis in cubilia laoreet augue luctus<br/> magna dolor luctus and egestas sapien egestas<br/> vitae nemo volute<br/><br/><br/>
                    Quaerat sodales sapien euismod blandit at vitae<br/> ipsum primis undo and cubilia laoreet augue and<br/> luctus magna dolor luctus at egestas sapien vitae<br/> nemo egestas volute and turpis dolores aliquam<br/> quaerat sodales a sapien
                </p>
            </div>
        </div>
    );
};

export default AnnouncementCard;
