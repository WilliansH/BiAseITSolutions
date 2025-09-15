import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home';
import Services from './components/Services/Services.jsx';
import ServiceDetails from './components/Services/ServiceDetails.jsx';
import Technologies from './components/Technologies/Technologies.jsx';
import Clients from './components/Clients/Clients.jsx';
import Careers from './components/Careers/Careers.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Services />
              <Clients />
              <About />
              <Careers />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <ServiceDetails />
              <Technologies />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
