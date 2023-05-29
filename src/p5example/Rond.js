export class Rond {
	constructor(p5) {
		this.p5 = p5;
		this.position = p5.createVector(
			p5.random(-this.p5.width / 2, this.p5.width / 2),
			p5.random(-this.p5.height / 2, this.p5.heiht / 2)
		);
		this.radius = 50;
		this.direction = '^';
	}

	calculate() {
		if (this.position.y > this.p5.height) this.direction = '';
		if (this.position.y < 0) {
			this.direction = '^';
		}
		if (this.direction === '^') this.position.y += 8;
		else this.position.y -= 4;
	}

	display() {
		this.p5.fill(255, this.position.y * 1.3, 0);
		this.p5.ellipse(this.position.x, this.position.y, this.radius);
	}
}
