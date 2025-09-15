import React from 'react';
import { FaCheckCircle, FaUsers, FaLightbulb, FaAward, FaRocket, FaHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './Careers.module.css';

const Careers = () => {
  const navigate = useNavigate();

  const advantages = [
    {
      icon: <FaCheckCircle />,
      title: 'Experiencia Comprobada',
      description: 'Más de 10 años de experiencia exitosa en proyectos de tecnología de la información.'
    },
    {
      icon: <FaUsers />,
      title: 'Equipo Experto',
      description: 'Profesionales altamente cualificados con certificaciones reconocidas en el sector IT.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Soluciones Innovadoras',
      description: 'Desarrollamos soluciones personalizadas que se adaptan a tus necesidades específicas.'
    },
    {
      icon: <FaAward />,
      title: 'Compromiso Total',
      description: 'Garantizamos la calidad y satisfacción del cliente en cada proyecto que emprendemos.'
    },
    {
      icon: <FaRocket />,
      title: 'Innovación Constante',
      description: 'Nos mantenemos a la vanguardia de las últimas tendencias y tecnologías emergentes.'
    },
    {
      icon: <FaHandshake />,
      title: 'Confianza y Transparencia',
      description: 'Construimos relaciones sólidas basadas en la honestidad y la comunicación abierta.'
    }
  ];

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="careers" className={styles.careers}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>¿Por qué elegir BiAse IT Solutions?</h2>
          <p>Descubre las razones que nos hacen la mejor opción para tu empresa</p>
        </div>
        <div className={styles.grid}>
          {advantages.map((advantage, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                {advantage.icon}
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <h3>¿Listo para transformar tu negocio?</h3>
          <p>Contacta con nosotros y descubre cómo podemos ayudarte</p>
          <button className={styles.btn} onClick={scrollToContact}>Contáctanos</button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
