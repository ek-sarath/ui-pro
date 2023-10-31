import React from "react";
import "../App.css";
import User from '../assets/Frame 7.svg';
import Users from '../assets/Frame 6.svg';
import Play from '../assets/PlayStore.svg';

const UserData = () => {
    return (
        <div className='AnnouncementCard'>
            <div className="left-half">
            <h4>No collection of user data. No Ads</h4>
                <p>
                Aliqum mullam blandit tempor sapien gravida atdonec ipsum porta justo. Velna vitae auctor andcongue magna impedit luctus dolor volute
                </p> 
                <p>
                Aliqum mullam blandit tempor sapien gravidaat donec ipsum porta justo. Velna vitae auctorand congue magna impedit luctus dolor volute
                </p>
                <p>
                Aliqum mullam blandit tempor sapien gravida atdonec ipsum porta justo. Velna vitae auctor andcongue magna impedit luctus dolor volute
                </p> 
                <br/><img src={Play} alt='Play Store'/>
            </div>
            <div className="right-half">
            <img src={User} alt='User Data' className="UserData" />
            <img src={Users} alt='User Datas' className="UserDatas"/>
            </div>
        </div>
    );
};

export default UserData;
