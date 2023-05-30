import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoidsManager from './p5example/BoidsManager';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          {<Routes>
            <Route exact path='/' element={<Home/>} />
          </Routes> }
          <BoidsManager/>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
