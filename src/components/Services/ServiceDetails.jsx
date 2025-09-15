import React, { useEffect } from 'react';
import { FaShoppingCart, FaLink, FaCog, FaCloud } from 'react-icons/fa';
import styles from './Services.module.css';

const ServiceDetails = () => {
  const detailedServices = [
    {
      title: 'Soluciones de E-Commerce',
      icon: <FaShoppingCart />,
      intro: 'El comercio electrónico, o E-Commerce, es la compra y venta de bienes y servicios a través de internet. Permite a las empresas llegar a un mercado global sin las limitaciones de una tienda física.',
      howWeDoIt: [
        'Diseño de interfaces de usuario intuitivas y atractivas para una experiencia de compra fluida.',
        'Integración de pasarelas de pago seguras como Stripe, PayPal o MercadoPago.',
        'Optimización para motores de búsqueda (SEO) para aumentar la visibilidad en línea.',
        'Desarrollo responsivo para dispositivos móviles y de escritorio.',
        'Implementación de carritos de compra, gestión de inventario y sistemas de envío.'
      ],
      benefits: 'Aumenta tus ventas en línea, mejora la experiencia del cliente y reduce costos operativos.'
    },
    {
      title: 'Integración de Sistemas',
      icon: <FaLink />,
      intro: 'La integración de sistemas conecta diferentes aplicaciones y bases de datos para que funcionen como una unidad cohesiva, eliminando la necesidad de entradas duplicadas y mejorando la eficiencia.',
      howWeDoIt: [
        'Análisis de los sistemas existentes para identificar puntos de integración.',
        'Desarrollo de APIs personalizadas o uso de middleware como Zapier o MuleSoft.',
        'Implementación de sincronización en tiempo real entre plataformas.',
        'Automatización de flujos de trabajo para reducir errores humanos.',
        'Pruebas exhaustivas para asegurar la integridad de los datos.'
      ],
      benefits: 'Optimiza el flujo de trabajo, reduce errores y aumenta la productividad de tu equipo.'
    },
    {
      title: 'Personalización de Software',
      icon: <FaCog />,
      intro: 'A veces, el software estándar no cubre todas las necesidades específicas de tu empresa. La personalización adapta soluciones existentes para que se ajusten perfectamente a tus procesos.',
      howWeDoIt: [
        'Evaluación de las funcionalidades actuales y las necesidades específicas.',
        'Modificación del código fuente o desarrollo de módulos adicionales.',
        'Integración con sistemas existentes para una transición suave.',
        'Pruebas de compatibilidad y rendimiento.',
        'Capacitación al equipo para el uso del software personalizado.'
      ],
      benefits: 'Aumenta la eficiencia, reduce costos a largo plazo y mejora la satisfacción del usuario.'
    },
    {
      title: 'Desarrollo de Software como Servicio (SAAS)',
      icon: <FaCloud />,
      intro: 'El Software como Servicio (SAAS) es un modelo de entrega de software donde las aplicaciones se alojan en la nube y se acceden a través de internet, ofreciendo escalabilidad y accesibilidad.',
      howWeDoIt: [
        'Arquitectura de aplicaciones escalables usando tecnologías como React, Node.js y bases de datos en la nube.',
        'Implementación de autenticación y autorización seguras.',
        'Desarrollo de dashboards personalizables para diferentes tipos de usuarios.',
        'Integración con APIs de terceros para funcionalidades adicionales.',
        'Monitoreo continuo y actualizaciones automáticas.'
      ],
      benefits: 'Reduce costos de infraestructura, permite acceso desde cualquier lugar y facilita el escalado según las necesidades.'
    }
  ];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h1>Nuestros Servicios Detallados</h1>
        {detailedServices.map((service, index) => (
          <div key={index} id={`service${index}`} className={styles.serviceSection}>
            <div className={styles.detailHeader}>
              <div className={styles.icon}>
                {service.icon}
              </div>
              <h2>{service.title}</h2>
            </div>
            <div className={styles.detailContent}>
              <h3>¿Qué es?</h3>
              <p>{service.intro}</p>
              <h3>Cómo lo hacemos</h3>
              <ul>
                {service.howWeDoIt.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <h3>Beneficios</h3>
              <p>{service.benefits}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;
