import React, { useRef, useEffect, useState } from 'react';
import '../styles/PfiveDrawMachine.css';

const CanvasCircle = () => {
  const canvasRef = useRef(null);
  const [size, setSize] = useState(20);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgba(255, 255, 255, 0.1)';
  }, []);

  const draw = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    context.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
    context.strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;
    context.lineWidth = 2;
    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
  };

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
  };

  return (
    <div className="App">
             <div>
        <label htmlFor="size-slider">Circle Size:</label>
        <input
          type="range"
          id="size-slider"
          min="10"
          max="100"
          value={size}
          onChange={handleSizeChange}
        />
      </div>
      <canvas
        ref={canvasRef}
        onMouseMove={draw}
        width="1000"
        height= "800"
        style={{ border: '1px solid black' }}
      ></canvas>
    </div>
  );
};

export default CanvasCircle;