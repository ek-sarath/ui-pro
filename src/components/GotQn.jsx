import React from "react";
import "../App.css";
import Ans from '../assets/Answers.svg';

const GotQn = () => {
    return (
        <div className='SecurityHeading'>
           <h3>Got Questions? Look Here</h3>
           <h6>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis<br/> a libero tempus, blandit and cursus varius and magnis sapien</h6>
           <img src={Ans} alt="Answers"/>
        </div>

        
    );
};

export default GotQn;
