import React from "react";
import '../App.css';
import Group19 from '../assets/Group19.svg';

function FileSharingComponent(props) {
  return (
    <div className="Centre">
      <h1>
        Share text, voice,<br/> photos, videos and <br/> GIFs files for free
      </h1>
      <p>Feugiat primis a ligula undo auctor mauris auctor <br/> laoreet and pretium augue an egestas cubilia</p>
      <button>Learn More</button>

         <div>
          <img src={Group19} alt="Group 19" style={{ top: -10, left: 100, width: '30%', height: '30%' }} />
         </div>
    </div>
  );
}

export default FileSharingComponent;
