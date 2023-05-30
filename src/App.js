import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import BoidsManager from './p5example/BoidsManager';


function App() {
  return (
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Home/>
          <BoidsManager/>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
