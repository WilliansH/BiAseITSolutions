import React from 'react';
import { FaCode, FaUsers, FaSearch } from 'react-icons/fa';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo de software personalizado',
      description: 'Creamos soluciones a medida para satisfacer las necesidades específicas de tu empresa.'
    },
    {
      title: 'Consultoría y asesoría tecnológica',
      description: 'Te ayudamos a tomar decisiones informadas sobre tecnología para optimizar tus procesos.'
    },
    {
      title: 'Reclutamiento de talento IT',
      description: 'Encontramos y seleccionamos el mejor talento en tecnología para tu equipo.'
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>Nuestros Servicios</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                {index === 0 && <FaCode />}
                {index === 1 && <FaUsers />}
                {index === 2 && <FaSearch />}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
