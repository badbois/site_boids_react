// //This script has been made from the Daniel's Shiffman one
// //You can find out the tutorial on his youtube channel:
// //https://youtu.be/mhjuuHl6qHM
// //And on his website there :
// //https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html


//init a Boid with random position,velocity and color
export class Boid {
  constructor(p5) {
    this.p5 = p5;
    
   //this.position = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.position = p5.createVector(p5.width / 2, p5.height / 2);
    this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.velocity.setMag(p5.random(2, 4));
    this.acceleration = p5.createVector();
    this.maxForce = 1;
    this.maxSpeed = 4;
    this.boid_color = "#" + Math.floor(Math.random()*16777215).toString(16);
  }

  //check if the boids are out of bound they're teleported to the
  //other side of the screen
  edges() {
    if (this.position.x > this.p5.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = this.p5.width;
    }
    if (this.position.y > this.p5.height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = this.p5.height;
    }
  }

  //Alignment behavior
  align(boids) {
    let perceptionRadius = 25;
    let steering = this.p5.createVector();
    let total = 0;
    for (let other of boids) {
      let d = this.p5.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
        if (other != this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.x -= this.velocity.x;
      steering.y -= this.velocity.y;
      steering.limit(this.maxForce);
    }
    return steering;
  }

  //Separation behavior
  separation(boids) {
    let perceptionRadius = 24;
    let steering = this.p5.createVector();
    let total = 0;
    for (let other of boids) {
      let d = this.p5.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
        if (other != this && d < perceptionRadius) {
        let diff = this.p5.constructor.Vector.sub(this.position, other.position);
        diff.div(d * d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.x -= this.velocity.x;
      steering.y -= this.velocity.y;
      steering.limit(this.maxForce);
    }
    return steering;
  }

  //Cohesion behavior
  cohesion(boids) {
    let perceptionRadius = 50;
    let steering = this.p5.createVector();
    let total = 0;
    for (let other of boids) {
      let d = this.p5.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
        if (other != this && d < perceptionRadius) {
        steering.add(other.position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.x -= this.position.x;
      steering.y -= this.position.y;
      steering.setMag(this.maxSpeed);
      steering.x -= this.velocity.x;
      steering.y -= this.velocity.y;
      steering.limit(this.maxForce);
    }
    return steering;
  }

  //multiply the acceleration of the current boid by
  //the result of our behaviors
  flock(boids) {
    let alignment = this.align(boids);
    let cohesion = this.cohesion(boids);
    let separation = this.separation(boids);

    alignment.mult(1);
    cohesion.mult(1);
    separation.mult(1.5);

    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
  }
  
  
  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  //Draw a boid
  show() {
    this.p5.strokeWeight(2);
    this.p5.stroke(this.boid_color);


    let theta= this.velocity.heading()+this.p5.radians(90);

    
    this.p5.push()
    this.p5.translate(this.position.x, this.position.y);
    this.p5.rotate(theta)
   
    this.p5.beginShape()
    this.p5.vertex(0, -4);
    this.p5.vertex(-3, 2);
    this.p5.vertex(3, 2);
    this.p5.endShape()
    this.p5.pop()
  }
}