import React from "react";
import "../App.css";
import User from '../assets/Frame 7.svg';
import Users from '../assets/Frame 6.svg';
import Play from '../assets/PlayStore.svg';

const UserData = () => {
    return (
        <div className='AnnouncementCard'>
            <div className="left-half">
            <h4>No collection of<br/> user data. No Ads</h4>
                <p>
                Aliqum mullam blandit tempor sapien gravida at<br/>donec ipsum porta justo. Velna vitae auctor and<br/>congue magna impedit luctus dolor volute
                </p> 
                <p>
                Aliqum mullam blandit tempor sapien gravida<br/>at donec ipsum porta justo. Velna vitae auctor<br/>and congue magna impedit luctus dolor volute
                </p>
                <p>
                Aliqum mullam blandit tempor sapien gravida at<br/>donec ipsum porta justo. Velna vitae auctor and<br/>congue magna impedit luctus dolor volute
                </p> <br/>
                <img src={Play} alt='Play Store'/>
            </div>
            <div className="right-half">
            <img src={User} alt='User Data' />
            <img src={Users} alt='User Datas' />
            </div>
        </div>
    );
};

export default UserData;
