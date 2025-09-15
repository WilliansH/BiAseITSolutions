import React from 'react';
import { FaShoppingCart, FaLink, FaCog, FaCloud } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Soluciones de E-Commerce',
      description: 'Construimos plataformas de comercio electrónico para aumentar tus ventas en línea y mejorar la experiencia de compra de tus clientes.'
    },
    {
      title: 'Integración de Sistemas',
      description: 'Integramos diferentes sistemas de software para eliminar entradas duplicadas y optimizar el flujo de trabajo en tu organización.'
    },
    {
      title: 'Personalización de Software',
      description: 'Adaptamos software existente para que se ajuste perfectamente a las necesidades individuales de tu empresa.'
    },
    {
      title: 'Desarrollo de Software como Servicio (SAAS)',
      description: 'Arquitecturamos y desarrollamos aplicaciones web SAAS escalables y seguras para satisfacer demandas específicas.'
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>Nuestros Servicios</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card} onClick={() => navigate(`/services#service${index}`)} style={{cursor: 'pointer'}}>
              <div className={styles.icon}>
                {index === 0 && <FaShoppingCart />}
                {index === 1 && <FaLink />}
                {index === 2 && <FaCog />}
                {index === 3 && <FaCloud />}
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
