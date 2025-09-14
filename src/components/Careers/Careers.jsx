import React from 'react';
import styles from './Careers.module.css';

const Careers = () => {
  const advantages = [
    'Experiencia comprobada en proyectos IT',
    'Equipo de profesionales altamente cualificados',
    'Soluciones innovadoras y personalizadas',
    'Compromiso con la calidad y la satisfacción del cliente'
  ];

  return (
    <section id="careers" className={styles.careers}>
      <div className={styles.container}>
        <h2>¿Por qué elegirnos?</h2>
        <div className={styles.grid}>
          {advantages.map((advantage, index) => (
            <div key={index} className={styles.card}>
              <p>{advantage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
