import React from "react";
import "../App.css";
import PlayM from '../assets/playbuttonMan.svg';

const Features = () => {
    return (
        <div className='SecurityHeading'>
           <h3>Discover powerful features to boost your productivity</h3>
           <img src={PlayM} alt='Play Button Man' className="PlaybuttonMan"/>
        </div>
    );
};

export default Features;
