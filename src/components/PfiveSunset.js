import Sketch from 'react-p5';
import React from 'react';
import "../styles/PfiveSunset.css";

class PfiveSunset extends React.Component {
	y = 0;
	direction = '^';

	setup = (p5, parentRef) => {
		p5.createCanvas(p5.windowWidth / 2, p5.windowHeight).parent(parentRef);
    p5.background(255);
    p5.frameRate(24);
	};

	draw = (p5) => {
		// p5.background(200);
		p5.fill(255, this.y / 4, 0);
		p5.ellipse(p5.width / p5.random(0,6), this.y, p5.random(50, 550));
		if (this.y > p5.height) this.direction = '';
		if (this.y < 0) {
			this.direction = '^';
		}
		if (this.direction === '^') this.y += 8;
		else this.y -= p5.random(4, 16);
	};

	render() {
		return (
			<div className="App">
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}


export default PfiveSunset;

