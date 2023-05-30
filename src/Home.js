import Article from './Article';
import Example from './Example';
import data from './db.json';


const Home = () => {

    
    return (
        <div className="home">
            <Article articles ={data.articles}/>
            <h1>Exemple de développement</h1>
            <Example examples ={data.examples}/>
        </div>
    );
}
 
export default Home;