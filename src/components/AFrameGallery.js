import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import '../styles/AFrameGallery.css';


const PictureGallery = () => {
  return (
    <div className="canvas">
    <Scene embedded>
      <a-assets>
        <img id="pic1" src="https://images.squarespace-cdn.com/content/v1/59c269ba4c0dbf3555c8106b/1595692528113-9RLZJ08DRB5I4FA8RZKT/DJ-Hand.jpg?format=2500w" />
        <img id="pic2" src="https://images.squarespace-cdn.com/content/v1/59c269ba4c0dbf3555c8106b/1595692585152-C80DODZO6AKYAWCXOSTD/Smoking-Area-Pal.jpg?format=2500w" />
        <img id="pic3" src="https://images.squarespace-cdn.com/content/v1/59c269ba4c0dbf3555c8106b/1595692570356-VSLG1RAXLAAUU7T9L0IZ/Self-Portrait-%28Shavings%29.jpg?format=2500w" />
      </a-assets>

      <Entity id="galleryContainer">
        <Entity id="pic1Container" position="-5 1 2" rotation="0 90 0">
          <Entity geometry={{ primitive: 'plane', height: 6, width: 8 }} material={{ src: '#pic1' }} />
          <Entity text={{ value: 'Hand of God, Oil on Canvas, 2020' }} position="-1.5 -3.5 0" color="#000" />
        </Entity>

        <Entity id="pic2Container" position="0 1 -4" rotation="0 0 0">
          <Entity geometry={{ primitive: 'plane', height: 6, width: 5 }} material={{ src: '#pic2' }} />
          <Entity text={{ value: 'Weekend, Oil on Canvas, 2020' }} position="-1.5 -3.5 0" color="#000" />
        </Entity>

        <Entity id="pic3Container" position="5 1 0" rotation="2 -90 0">
          <Entity geometry={{ primitive: 'plane', height: 8, width: 6 }} material={{ src: '#pic3' }} />
          <Entity text={{ value: 'Self Portrait, Oil on Canvas, 2020' }} position="-1.5 -4.5 0" color="#000" />
        </Entity>
      </Entity>

      <Entity camera look-controls />
    </Scene>
    </div>
  );
}

export default PictureGallery;
