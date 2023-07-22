import React, { useState } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import PfiveSunset from './PfiveSunset';
import Threejs from './Threejs';
import PfiveDrawMachine from './PfiveDrawMachine';
import ReactiveCubes from './ReactiveCubes';
import PictureGallery from './AFrameGallery';
import About from './About';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <Navbar onLinkClick={handleLinkClick} />
      <div className="container mt-2" style={{ marginTop: 0 }}>
        {activeComponent === 'about' && <About />}
        {activeComponent === 'pfive-sunset' && <PfiveSunset />}
        {activeComponent === 'picture-gallery' && <PictureGallery />}
        {activeComponent === 'threejs' && <Threejs />}
        {activeComponent === 'Drawing Machine' && <PfiveDrawMachine />}
        {activeComponent === 'reactive-cubes' && <ReactiveCubes width={1400} height={1200} />}
      </div>
    </>
  );
}

export default App;

