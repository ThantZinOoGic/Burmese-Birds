import './App.css';
import BirdDetail from './BirdDetail';
import Birds from './Birds';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <Router>
        <NavBar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/birds' element={<Birds/>}/>
              <Route path='/birds/:id' element={<BirdDetail/>}/>
            </Routes>
          </div>
          <Footer/>
    </Router>
  );
}

export default App;
