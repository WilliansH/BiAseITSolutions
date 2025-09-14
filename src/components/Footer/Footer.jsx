import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>BiAse IT Solutions</h3>
          <p>Desarrollo de software personalizado y soluciones tecnológicas innovadoras.</p>
        </div>
        <div className={styles.section}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#carreras">Carreras</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Contacto</h3>
          <p>Email: info@biaseitsolutions.com</p>
          <p>Teléfono: +1 (123) 456-7890</p>
          <p>Dirección: Ciudad, País</p>
        </div>
        <div className={styles.section}>
          <h3>Síguenos</h3>
          <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2023 BiAse IT Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
