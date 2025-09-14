import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.Home}>
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <div className={styles.shape4}></div>
      <div className={styles.shape5}></div>
      <div className={styles.content}>
        <img src="/Logo/Logo-01.jpg" alt="BiAse IT Solutions Logo" className={styles.logo} />
        <h1>Soluciones de Software a la Medida para tu Negocio</h1>
        <p>En BiAse IT Solutions ofrecemos desarrollo personalizado, consultoría tecnológica y reclutamiento de talento IT para impulsar tu empresa.</p>
      </div>
    </section>
  );
};

export default Home;
