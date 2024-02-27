import './App.css';
import BirdDetail from './BirdDetail';
import Birds from './Birds';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
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
    </Router>
  );
}

export default App;
