import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
// import ImageComponent from './components/ImageComponent';
import FileSharingComponent from './components/FileSharingComponent';
import CustomCard from './components/CustomCard';
import Footer from './components/Footer.jsx';
import Quick from './assets/quickAccess.svg'
import Cross from './assets/cross.svg'
import Easy from './assets/easy.svg';
import Women from './assets/mobileWomen.svg';

function App() {
  return (
    <div className="App relative">
      <NavBar />
      {/* <ImageComponent/> */}
        <FileSharingComponent />


      <div className='ShortCards'>
          <CustomCard width="470px" height="250px">
            <div className='BoxHead'>
              <div>
              <img src={Quick} alt='Quick Access'/></div>
              Quick Access
              <h5>Feugiat primis ultrice a semper<br/> lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
            </div>
          </CustomCard>

          <CustomCard width="470px" height="250px">
           <div className='BoxHead'>
           <div>
              <img src={Cross} alt='Cross Platform'/></div>
             Cross-Platform
             <h5>Feugiat primis ultrice a semper<br/> lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
             </div>
          </CustomCard>

          <CustomCard width="470px" height="250px">
           <div className='BoxHead'>
           <div>
              <img src={Easy} alt='Easy Integration'/></div>
             Easy Integration
             <h5>Feugiat primis ultrice a semper<br/> lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
           </div>
          </CustomCard>
        </div>


        <div className='LongCard'>
          <CustomCard width="1050px" height="450px">
          <div className='WomenBox'>
           <div>
              <img src={Easy} alt='Easy Integration'/></div>
             Easy Integration
             <h5>Feugiat primis ultrice a semper<br/> lacus cursus feugiat a primis ultrice a ligula risus auctor</h5>
           </div>




          <img src={Women} alt='Mobile Women'/>
          </CustomCard>
        </div>

           <Footer/>
    </div>
  );
}

export default App;
