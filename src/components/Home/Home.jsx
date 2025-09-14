import React from 'react';
import styles from './Home.module.css';
import Typewriter from './Typewriter';

const Home = () => {
  return (
    <section id="home" className={styles.Home}>
      <div className={styles.content}>
        <h1>
          <Typewriter text="Soluciones de Software a la Medida para tu Negocio" />
        </h1>
        <p>En BiAse IT Solutions ofrecemos desarrollo personalizado, consultoría tecnológica y reclutamiento de talento IT para impulsar tu empresa.</p>
      </div>
    </section>
  );
};

export default Home;
