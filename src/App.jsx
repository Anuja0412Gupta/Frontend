import React from 'react';
import './App.css';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import GadgetListing from './components/GadgetListing';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="heading">QUICKRENT</div>
      <Gallery></Gallery>
      <HeroBanner />
      <Features />
      <GadgetListing />
      <br></br>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd2X17tqrwkhcy97UEh9OssFG-cdmoOTyAEzbT1j2_WhbLcEg/viewform?embedded=true" width="600" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
