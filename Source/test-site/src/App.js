import './App.css';
import HomeView from "./components/HomeView.js";
import PortfolioView from "./components/PortfolioView.js";
import AboutMeView from "./components/AboutMeView.js";
import ContactView from "./components/ContactView.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <nav className="navbar">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/portfolio" className="nav-item">Portfolio</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>

      <Routes> 
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/portfolio" element={<PortfolioView />}></Route>
        <Route path="/about" element={<AboutMeView />}></Route>
        <Route path="/contact" element={<ContactView />}></Route>
      </Routes>

      <div className="footer">
        <p>made with react ❤️</p>
      </div>
    </div>
  );
}

export default App;
