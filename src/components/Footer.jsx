import React from "react";
import "../App.css";
import email from '../assets/email.svg'
import facebook from '../assets/1.svg';
import instagram from '../assets/2.svg';
import twitter from '../assets/3.svg';
import linkdin from '../assets/4.svg';
import youtube from '../assets/5.svg';
import other from '../assets/6.svg';
import phoneNumber from '../assets/phoneNumber.svg'

const Footer = () => {
  return (
    <footer>

      <div className="Footerr">
        <div className="CopyRightnIcons">
        <p>© 2010 - 2021 OLMO. All Rights Reserved</p>
          <img src={facebook} alt="1" />
          <img src={instagram} alt="2" />
          <img src={twitter} alt="3" />
          <img src={linkdin} alt="4" />
          <img src={youtube} alt="5" />
          <img src={other} alt="6" />
        </div>
    
        <div className="contactInfo">
          <img src={email} alt="Email" />
          <a href>hello@yourapp.com</a>
          <img src={phoneNumber} alt="Phone" />
          <p>+000 000 00 00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
