import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Router>
        <div>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/cart" element={<Cart/>} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
