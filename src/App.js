import './App.css';
import Home from './Home';
import Navbar from './Navbar'
import Menu from './Menu'
import Reservations from './Reservations'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
          <div className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path='/Reservations' element={< Reservations/>} />
            </Routes>
          </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
