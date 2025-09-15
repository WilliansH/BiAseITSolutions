import React from 'react';
import styles from './Home.module.css';
import Typewriter from './Typewriter';

const Home = () => {
  return (
    <section id="home" className={styles.Home}>
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <div className={styles.shape4}></div>
      <div className={styles.shape5}></div>
      <div className={styles.content}>
        <h1>
          <Typewriter text="Soluciones de Software a la Medida para tu Negocio" />
        </h1>
        </div>
    </section>
  );
};

export default Home;
