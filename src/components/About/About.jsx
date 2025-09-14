import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>Sobre Nosotros</h2>
        <div className={styles.content}>
          <img src="/coworking-about.jfif" alt="Equipo de BiAse IT Solutions trabajando" className={styles.image} />
          <p>
            En BiAse IT Solutions, nos dedicamos a ofrecer soluciones tecnológicas innovadoras y personalizadas para impulsar el crecimiento de tu empresa. Nuestro equipo de expertos trabaja con pasión y compromiso para brindarte el mejor servicio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
