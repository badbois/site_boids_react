import Sketch from 'react-p5';
import {Rond} from './Rond';

function Test() {
    const ronds = [];

    const setup = (p5, parentRef) => {
		p5.createCanvas(200, 200).parent(parentRef);
		for (let i = 0; i < 10; i++) {
			ronds.push(new Rond(p5));
		}
	};

    const draw = (p5) => {
		//p5.background(0);
		for (let cercle of ronds) {
			cercle.calculate();
			cercle.display();
		}
	};

    return (
        <div className="boidsManager">
            <Sketch setup={setup} draw={draw} />;
        </div>
    )
}

export default Test;