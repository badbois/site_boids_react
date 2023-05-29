//This script has been made from the Daniel's Shiffman one
//You can find out the tutorial on his youtube channel:
//https://youtu.be/mhjuuHl6qHM
//And on his website there :
//https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html

//import p5 from "p5";

//init a Boid with random position,velocity and color
class Boid {
  constructor() {
    this.position = window.p5.createVector(window.p5.random(p5.width), window.p5.random(p5.height));
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
    if (this.position.x > p5.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = p5.width;
    }
    if (this.position.y > p5.height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = p5.height;
    }
  }

  //Alignment behavior
  align(boids) {
    let steering = p5.createVector();
    let total = 0;
    for (let other of boids) {
      let d = p5.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      //if (other != this && d < alignmentObject.perceptionRadius) {
        if (other != this && d < 50) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  //Separation behavior
  separation(boids) {
    let steering = p5.createVector();
    let total = 0;
    for (let other of boids) {
      let d = p5.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      //if (other != this && d < separationObject.perceptionRadius) {
        if (other != this && d < 100) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.div(d * d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  //Cohesion behavior
  cohesion(boids) {
    let steering = p5.createVector();
    let total = 0;
    for (let other of boids) {
      let d = p5.dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      //if (other != this && d < cohesionObject.perceptionRadius) {
        if (other != this && d < 50) {
        steering.add(other.position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
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

    // alignment.mult(alignmentObject.force);
    // cohesion.mult(cohesionObject.force);
    // separation.mult(separationObject.force);

    alignment.mult(1);
    cohesion.mult(1);
    separation.mult(1);

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
    p5.strokeWeight(2);
    p5.stroke(this.boid_color);


    let theta= this.velocity.heading()+p5.radians(90);

    
    p5.push()
    p5.translate(this.position.x, this.position.y);
    p5.rotate(theta)
   
    p5.beginShape()
    p5.vertex(0, -4);
    p5.vertex(-3, 2);
    p5.vertex(3, 2);
    p5.endShape()
    p5.pop()
  }
}

export default Boid;