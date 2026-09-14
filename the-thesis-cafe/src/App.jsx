import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>The Thesis Cafe</h3>
              <p>Where Every Sip Tells a Story</p>
            </div>
            <div className="footer-info">
              <p>Pratap Nagar, Nagpur, Maharashtra</p>
              <p>Email: thethesiscafe@gmail.com</p>
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/thethesiscafe/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/p/The-Thesis-Cafe-61573692057380/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} The Thesis Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
