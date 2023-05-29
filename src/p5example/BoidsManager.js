import Sketch from 'react-p5'
import p5 from 'p5'
import {Boid} from './Boid'

function BoidsManager() {
    
    //Create some object for each of our behavior
    //------------------------------------------------------
    const alignmentObject = {
        force: 1,
        perceptionRadius:50
    };
    
    const cohesionObject = {
        force: 1,
        perceptionRadius: 100
    };
    
    const separationObject = {
        force: 1,
        perceptionRadius: 50
    }

    //------------------------------------------------------


    //Create and fill the flock array during the setup
    const flock = [];

    

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(640, 360).parent(canvasParentRef)
        for (let i = 0; i < 20; i++) {
            flock.push(new Boid(p5))
        }
    }
    //------------------------------------------------------

    
    //------------------------------------------------------


    //Draw each flock
    const draw = p5 => {
        //p5.background(20)
        for (let boid of flock) {
            //boid.edges();
            //boid.flock(flock);
            boid.update();
            boid.show();
        }
       
    }

    return (
        <div className="boidsManager"> 
            <Sketch setup={setup} draw={draw} />;
        </div>
    )
}
 
export default BoidsManager ;