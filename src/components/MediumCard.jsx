import React from "react";
import "../App.css";
import Medium from '../assets/MediumCard.svg';

const MediumCard = () => {
    return (
        <div className='MediumCard'>
          <img src={Medium} alt='Medium Card'/>  
        </div>
    );
};

export default MediumCard;
