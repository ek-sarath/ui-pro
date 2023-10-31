import React from "react";
import "../App.css";
import Specs from '../assets/SpecsMan.svg';
import LapMan from '../assets/LaptopMan.svg';


const ShareMoment = () => {
    return (
        <div className='SecurityHeading'>
           <h3>Share Moments. Share Life.</h3>
           <h6>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a<br/>libero tempus, blandit and cursus varius and magnis sapien</h6>
           
           <div className="OlmosTabs">
           <img src={Specs} alt='Specs Man' className="Man"/>
           <img src={LapMan} alt='Play Button Man' className="Man"/>
           <button className="OlmoButton">See OLMO in Action</button><br/>
            <br/>30 days free trial <span className="RedPipe">|</span>Exclusive Support<span className="RedPipe">|</span>No Fee
         </div>
        </div>
    );
};

export default ShareMoment;
