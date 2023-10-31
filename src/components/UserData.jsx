import React from "react";
import "../App.css";
import User from '../assets/frameSeven.svg';
import Users from '../assets/frameSix.svg';
import Play from '../assets/playStore.svg';

const UserData = () => {
    return (
        <div className='AnnouncementCard'>
            <div className="left-half">
            <h3>No collection of user data. No Ads</h3>
                <h6>
                Aliqum mullam blandit tempor sapien gravida atdonec ipsum porta justo. Velna vitae auctor andcongue magna impedit luctus dolor volute
                <br/><br/>
                Aliqum mullam blandit tempor sapien gravidaat donec ipsum porta justo. Velna vitae auctorand congue magna impedit luctus dolor volute
                <br/><br/>
                Aliqum mullam blandit tempor sapien gravida atdonec ipsum porta justo. Velna vitae auctor andcongue magna impedit luctus dolor volute
                </h6> 
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
