import Sketch from 'react-p5'
import {Boid} from './Boid'

function BoidsManager() {
    
    const flock = [];
 
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(800, 600).parent(canvasParentRef)
        for (let i = 0; i < 200; i++) {
            flock.push(new Boid(p5))
        }
    }

    
    //------------------------------------------------------


    //Draw each flock
    const draw = p5 => {
        p5.background(0)
        for (let boid of flock) {
            boid.edges();
            
            boid.update();
            boid.flock(flock);
            boid.show();
        }
       
    }

    return (
        <div className="boidsManager"> 
            <h1>Exemple de d'implémentation</h1>
            <Sketch setup={setup} draw={draw} />;
            <p>Dans cette implémentation, nous pouvons voir des boids en train d'évoluer naturellement. Néanmoins, beaucoup d'améliorations peuvent être misent en place comme par exemple le fait d'avoir des rotations plus fluides ou encore d'ajouter des comportements comme l'esquive d'obstacle ou bien avoir différents groupes de boids. Merci à Daniel Shiffman pour sa chaine <a href='https://www.youtube.com/@TheCodingTrain' target='_blank'> TheCodingTrain</a> grâce à laquelle j'ai appris beaucoup de chose. Vous pouvez retrouver un code de boids fonctionnels et interractifs <a href='https://editor.p5js.org/badbois/sketches/ri2a72pON' target='_blank'> ici.</a> </p>
        </div>
    )
}
 
export default BoidsManager ;