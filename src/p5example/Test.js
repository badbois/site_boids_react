import Sketch from 'react-p5';
import {Rond} from './Rond';

function Test() {
    const ronds = [];

    let y = 0;
    let direction = '^';

    const setup = (p5, parentRef) => {
		p5.createCanvas(200, 200).parent(parentRef);
		for (let i = 0; i < 10; i++) {
			ronds.push(new Rond(p5));
		}
	};

    const draw = (p5) => {
		//p5.background(0);
		p5.background(0);
		if (y > p5.height) direction = '';
		if (y < 0) {
			direction = '^';
		}
		if (direction === '^') y += 8;
		else y -= 4;

		p5.fill(255, y * 1.3, 0);
		p5.ellipse(p5.width/2, y, 50);
        
	};

    return (
        <div className="boidsManager">
            <Sketch setup={setup} draw={draw} />;
        </div>
    )
}

export default Test;