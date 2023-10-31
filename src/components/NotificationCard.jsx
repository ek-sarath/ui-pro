import React from "react";
import "../App.css";
import Women from '../assets/mobileWomen.svg';
import Message from '../assets/messageIcon.svg';
import Emoji from '../assets/emojiIcon.svg';



const NotificationCard = () => {
    return (
        <div>
            <div className='NotificationCard'>
                <img src={Message} alt='Message Icon'/>
                
                <div>Text, Voice & Video Calls
                <h5>Ligula risus auctor tempus dolor feugiat undo lacinia purus lipsum quaerat primis ultrice tellus and viverra purus suscipit</h5>
                </div>
            </div>
            
            <div className='WomenBox'>
                <img src={Emoji} alt='Emoji Icon'/>
                Stickers, Emojis, Themes
                <h5>Ligula risus auctor tempus dolor feugiat undo lacinia purus lipsum quaerat primis ultrice tellus and viverra purus suscipit</h5>
            </div>
            <img src={Women} alt='Mobile Women'/>
        </div>
    );
};

export default NotificationCard;
