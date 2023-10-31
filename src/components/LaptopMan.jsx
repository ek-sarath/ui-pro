import React from "react";
import "../App.css";
import LaptopMan from '../assets/LaptopMan.svg';
import Specs from '../assets/SpecsMan.svg';

const Laptop = () => {
    return (
  <div className="Olmos">
    <img src={Specs} alt="Specs Man"/>
    <img src={LaptopMan} alt="Laptop Man"/>
     <button className="OlmoButton">See OLMO in Action</button>
     30 days free trial <span className="RedPipe">|</span>Exclusive Support<span className="RedPipe">|</span>No Fee
 </div> 
  );
};

export default Laptop;