import React, { Component } from 'react';
import '../styles/ReactiveCubes.css';


class RectComponent extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.rects = [];
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');

    // Set up interval (game Loop)
    const FPS = 45;

    const setupRects = () => {
      const bs = 10;
      for (let i = 0; i < 700; i++) {
        const xv = Math.floor(Math.random() * 76 + 25) / FPS;
        const yv = Math.floor(Math.random() * 76 + 25) / FPS;
        const x = Math.floor(Math.random() * (canvas.width - bs)) + bs / 2;
        const y = Math.floor(Math.random() * (canvas.height - bs)) + bs / 2;
        const color = 'black';
        this.rects.push(new Rect(canvas, context, x, y, xv, yv, bs, color));
      }
    };

    const gameLoop = () => {
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);
      this.rects.forEach((rect) => rect.update());
    };

    setupRects();
    this.gameLoopInterval = setInterval(gameLoop, 1000 / FPS);
  }

  componentWillUnmount() {
    clearInterval(this.gameLoopInterval);
  }

  render() {
    const { width, height } = this.props;
    return <canvas className="App" ref={this.canvasRef} width={width / 1} height={height / 1.4} />;
  }
}

class Rect {
  constructor(canvas, context, x, y, xv, yv, bs, color) {
    this.canvas = canvas;
    this.context = context;
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.bs = bs;
    this.color = color;
  }

  update() {
    // move the rectangle
    this.x += this.xv;
    this.y += this.yv;

    // bounce the rectangle off each wall
    if (this.x - this.bs / 2 < 0 && this.xv < 0) {
      this.xv = -this.xv;
    }
    if (this.x + this.bs / 2 > this.canvas.width && this.xv > 0) {
      this.xv = -this.xv;
    }
    if (this.y - this.bs / 2 < 0 && this.yv < 0) {
      this.yv = -this.yv;
    }
    if (this.y + this.bs / 2 > this.canvas.height && this.yv > 0) {
      this.yv = -this.yv;
    }

    // draw rectangle
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x - this.bs / 2, this.y - this.bs / 2, this.bs, this.bs);
  }
}


export default RectComponent;
