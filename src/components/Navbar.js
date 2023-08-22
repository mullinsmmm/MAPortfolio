import React from 'react';
import '../styles/Navbar.css';

function Navbar({ onLinkClick }) {
  const handleLinkClick = (component) => {
    onLinkClick(component);
  };

  return (
    <nav className="Sidebar">
      <h1 className="Title">MATT MULLINS</h1>
      <ul>
        <li>
          <button onClick={() => handleLinkClick('about')}>About</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('pfive-sunset')}>Circle</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('picture-gallery')}>VR Gallery</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('threejs')}>Torus</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('Drawing Machine')}>Drawing Machine</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('reactive-cubes')}>Cubes</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('ProcessingDrawing')}>Processing Drawings</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('CommandShift')}>Command Shift</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('CocktailCompanion')}>Cocktail Companion</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
