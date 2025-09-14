import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('home')}>
          <img src="/Logo/Logo-01.jpg" alt="BiAse IT Solutions Logo" className={styles.logoImage} />
          BiAse IT Solutions
        </div>
        <nav className={styles.nav}>
          <a onClick={() => scrollToSection('home')}>Inicio</a>
          <a onClick={() => scrollToSection('services')}>Servicios</a>
          <a onClick={() => scrollToSection('clients')}>Clientes</a>
          <a onClick={() => scrollToSection('careers')}>Carreras</a>
          <a onClick={() => scrollToSection('contact')}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
