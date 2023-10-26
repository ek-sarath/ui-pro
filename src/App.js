import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
// import ImageComponent from './components/ImageComponent';
import FileSharingComponent from './components/FileSharingComponent';
import CustomCard from './components/CustomCard';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App relative">
      <NavBar />
      {/* <ImageComponent/> */}
        <FileSharingComponent />


      <div className='ShortCards'>
          <CustomCard width="363px" height="279.836px">
            <div>
              Quick Access
            </div>
          </CustomCard>

          <CustomCard width="363px" height="279.836px">
           <div>
             Quick Access
           </div>
          </CustomCard>

          <CustomCard width="363px" height="279.836px">
           <div>
             Quick Access
           </div>
          </CustomCard>
        </div>

           <Footer/>
    </div>
  );
}

export default App;
