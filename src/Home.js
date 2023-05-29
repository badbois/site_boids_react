import useFetch from './useFetch';
import Article from './Article';
import Example from './Example';
import BoidsManager from './p5example/BoidsManager';
import Test from './p5example/Test';


const Home = () => {
    const{ data: articles, isPending, error } = useFetch('http://localhost:8000/articles');
    const{ data: examples, isPending1, error1 } = useFetch('http://localhost:8000/examples');
    
    return (
        <div className="home">
            { error && <div> { error } </div>}
            { isPending && <div> Loading..  </div> }
            <Article articles ={articles}/>
            <h1>Exemple de d'implémentation</h1>
            {/* <BoidsManager/> */}
            <Test/>
            <h1>Exemple de développement</h1>
            <Example examples ={examples}/>
        </div>
    );
}
 
export default Home;