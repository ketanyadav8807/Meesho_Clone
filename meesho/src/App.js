import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { Sub_Navbar } from './Components/Sub_Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Sub_Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
      </Routes>
      <Footer />
          )
}
