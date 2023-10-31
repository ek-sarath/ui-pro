import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
// import ImageComponent from './components/ImageComponent';


import FrontPage from './components/FrontPage';
import CustomCard from './components/CustomCard';
import Footer from './components/Footer.jsx';
import Quick from './assets/quickAccess.svg'
import Cross from './assets/cross.svg'
import Easy from './assets/easy.svg';
import Women from './assets/mobileWomen.svg';
import AnnouncementCard from './components/AnnouncementCard';
import Message from './assets/messageIcon.svg';
import Emoji from './assets/emojiIcon.svg';
import Spam from './assets/spamIcon.svg';
import SecurityHeading from './components/SecurityHeading';
import VerificationCard from './components/VerificationCard';
// import Mobile from './assets/MobileCard.svg';
import WebHeading from './components/WebHeading';
import Orange from './assets/OrangeRectangle.svg';
import ShareMoment from './components/ShareMoment';
// import Group from './assets/GroupCard.svg';
import UserData from './components/UserData';
import Features from './components/Features';
// import CustomerStories from './components/CustomerStories';
import GotQn from './components/GotQn';
import Story from './assets/Stories.svg';
import Frame from './assets/CharlieFrame.svg'
import Play from './assets/PlayStore.svg';
import SearchBox from './components/SeachBox';
import CustomerStories from './components/CustomerStories';
import MediumCard from './components/MediumCard';
import Ans from './assets/Answers.svg';
// import GroupMsg from './assets/SendGroupMsg.svg';
// import LowData from './assets/LowDataUsage.svg';
import Order from './assets/orderPhoto.svg';
import SittingWomen from './assets/SittingWomen.svg';
import WhiteCard from './components/WhiteCard';
import WhiteCard2 from './components/WhiteCard2';
import UserCommands from './components/UserCommands';


function App() {
  return (
    <div className="App relative">
      <NavBar />
      {/* <ImageComponent/> */}

        <FrontPage />


      <div className='ShortCards'>
          <CustomCard width="363px" height="279.836px">
            <div className='BoxHead'>
              <div>
              <img src={Quick} alt='Quick Access' className='ShortcardIcons'/></div>
              Quick Access
              <h5>Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
            </div>
          </CustomCard>

          <CustomCard width="363px" height="279.836px">
           <div className='BoxHead'>
           <div>
              <img src={Cross} alt='Cross Platform' className='ShortcardIcons'/></div>
             Cross-Platform
             <h5>Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
             </div>
          </CustomCard>

          <CustomCard width="363px" height="279.836px">
           <div className='BoxHead'>
           <div>
              <img src={Easy} alt='Easy Integration'  className='ShortcardIcons'/></div>
              Easy Integration
             <h5>Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
           </div>
          </CustomCard>
        </div>

      

           <AnnouncementCard/> 


           <div className='LongCard'>
          <CustomCard width="1050px" height="791px">
          <div className='CharlieFrame'>
              <div className="left-half">

              <div className='TextPara'>
                  <img src={Message} alt='Message icon' className='MessageIcon'/>
                   <div> <h2>Stickers, Emojis, Themes</h2>
                  <h5>Ligula risus auctor tempus dolorfeugiat undo lacinia purus lipsumquaerat primis ultrice tellus andviverra purus suscipit
                   </h5> </div></div>

                   <div className='TextPara'>
                  <img src={Emoji} alt='Emoji icon' className='MessageIcon'/>
                   <div> <h2>Text,Voice & Video Calls</h2>
                   <h5>Ligula risus auctor tempus dolorfeugiat undo lacinia purus lipsumquaerat primis ultrice tellus andviverra purus suscipit
                   </h5> </div></div>

                   <div className='TextPara'>
                  <img src={Spam} alt='Spam icon' className='MessageIcon'/>
                   <div> <h2>Spam Protection</h2>
                   <h5>Ligula risus auctor tempus dolorfeugiat undo lacinia purus lipsumquaerat primis ultrice tellus andviverra purus suscipit
                   </h5> </div></div>

               </div>

              <div className="right-half">
              < img src={Women} alt='Mobile Women'/>
           </div>
           </div>
          </CustomCard>
        </div>

        <SecurityHeading/>
        <VerificationCard/>

        <div className='LongCard'>
          <CustomCard width="1050px" height="791px">
          <div className='CharlieFrame'>
              <div className="left-half">

              <div className='MobileHead'>
                  <h3>Work smarter withpowerful automation</h3><br/>
                  <h6>Quaerat sodales sapien euismod blandit purus apurus ipsum primis in cubilia laoreet augue luctusmagna dolor luctus and egestas sapien egestasvitae nemo volute
                   </h6>
                   <WhiteCard/><br/>
                   <WhiteCard2/>
                   </div>
               </div>

              <div className="right-half">
                 <div className='IconPaste'>
                  <img src={Order} alt='Order Card'/>
                <img src={SittingWomen} alt='Sitting Paste'/></div>
           </div>
           </div>
          </CustomCard>
        </div>

              <UserCommands/>
              <WebHeading/>


        <div className='ShortCards'>
          <CustomCard width="363px" height="279.836px">
            <div className='BoxHead'>
              <div>
              <img src={Orange} alt='Orange Rectangle'/></div>
              Friendly Interface
              <h5>Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
            </div>
          </CustomCard>

          <CustomCard width="363px" height="279.836px">
           <div className='BoxHead'>
           <div>
           <img src={Orange} alt='Orange Rectangle'/></div>
           Extremely Flexible
             <h5>Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
             </div>
          </CustomCard>

          <CustomCard width="363px" height="279.836px">
           <div className='BoxHead'>
           <div>
           <img src={Orange} alt='Orange Rectangle'/></div>
           Strong Encryption
             <h5>Feugiat primis ultrice a semper lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
           </div>
          </CustomCard>
        </div>


        <div className='LongCard'>
          <CustomCard width="1050px" height="791px">
          <div className='CharlieFrame'>
              <div className="left-half">

              <div className='MobileHead'>
                  <h2>Keep your favourite people close to you</h2>

                  <h6>Fringilla risus, luctus mauris orci auctor euismodiaculis luctus magna purus pretium ligula purusundo quaerat tempor sapien rutrum maurisquaerat ultrice
                   <br/><br/>Quaerat sodales sapien euismod purus blandit
                   <br/><br/>Nemo ipsam egestas volute turpis dolores undoultrice aliquam quaerat at sodales sapien purus
                   </h6>
                   </div>
               </div>

              <div className="right-half">
                 <div className='IconPaste'>
                  <img src={Order} alt='Order Card'/>
                  <img src={SittingWomen} alt='Sitting Women'/>
                </div>
           </div>
           </div>
          </CustomCard>
        </div>





        <ShareMoment/>
        {/* <img src={Group} alt='Group Card'/> */}


        <div className='LongCard'>
          <CustomCard width="1050px" height="621px">
        <div className='CardWrite'>
           <CustomerStories/>
            <br/><img src={Story} alt="Story Card" className="StoryImage"/>
          </div>
          </CustomCard>
        </div>



        <UserData/>
        <Features/>

        <div className='LongCard'>
          <CustomCard width="1050px" height="250px">
           <MediumCard/>
          </CustomCard>
        </div>


        <div>
          <GotQn/>
        <img src={Ans} alt="Answers" className="GotQns" />
        </div>

     <SearchBox/>

        <div className='LongCards'>
          <CustomCard width="1050px" height="561px">
          <div className='CharlieFrames'>
              <div className="left-half">
                < img src={Frame} alt='Charlie Frame'/></div>

              <div className="right-half">
                <div className='LastCard'>
                <h4>Unlimited calling,texting and picturemessaging</h4>
                <p>Quaerat sodales sapien euismod blandit at vitaeipsum primis undo and cubilia laoreet augue andluctus magna dolor luctus at egestas sapien vitaenemo egestas
                </p> 
                <div className="CharlieTablets">
                 <button className="GetButton">Let's Get Started</button>
                 <button className="PricingButton ">View Pricing</button><br/>
               <br/>14 days free trial <span className="RedPipe">|</span>Exclusive Support<span className="RedPipe">|</span>No Fee
              <br/><br/><img src={Play} alt='Play Store'/>
              </div>
              </div>
           </div>
           </div>
          </CustomCard>
        </div>


          <div><Footer/></div> 
    </div>
  );
}

export default App;
