import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => handleNavClick('home')}>
          <img src="/Logo/Logo-01.jpg" alt="BiAse IT Solutions Logo" className={styles.logoImage} />
          BiAse IT Solutions
        </div>
        <nav className={styles.nav}>
          <a onClick={() => handleNavClick('home')}>Inicio</a>
          <Link to="/services">Servicios</Link>
          <a onClick={() => handleNavClick('clients')}>Clientes</a>
          <a onClick={() => handleNavClick('careers')}>Carreras</a>
          <a onClick={() => handleNavClick('contact')}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
