import React, { useEffect } from 'react';
import { FaShoppingCart, FaLink, FaCog, FaCloud, FaHandshake, FaUserTie } from 'react-icons/fa';

const ServiceDetails = () => {
  const detailedServices = [
    {
      id: 'ecommerce',
      title: 'Soluciones de E-Commerce',
      icon: <FaShoppingCart className="h-6 w-6" />,
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
      id: 'integracion',
      title: 'Integración de Sistemas',
      icon: <FaLink className="h-6 w-6" />,
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
      id: 'personalizacion',
      title: 'Personalización de Software',
      icon: <FaCog className="h-6 w-6" />,
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
      id: 'saas',
      title: 'Desarrollo de Software como Servicio (SAAS)',
      icon: <FaCloud className="h-6 w-6" />,
      intro: 'El Software como Servicio (SAAS) es un modelo de entrega de software donde las aplicaciones se alojan en la nube y se acceden a través de internet, ofreciendo escalabilidad y accesibilidad.',
      howWeDoIt: [
        'Arquitectura de aplicaciones escalables usando tecnologías como React, Node.js y bases de datos en la nube.',
        'Implementación de autenticación y autorización seguras.',
        'Desarrollo de dashboards personalizables para diferentes tipos de usuarios.',
        'Integración con APIs de terceros para funcionalidades adicionales.',
        'Monitoreo continuo y actualizaciones automáticas.'
      ],
      benefits: 'Reduce costos de infraestructura, permite acceso desde cualquier lugar y facilita el escalado según las necesidades.'
    },
    {
      id: 'consultoria',
      title: 'Consultoría Tecnológica',
      icon: <FaHandshake className="h-6 w-6" />,
      intro: 'La consultoría tecnológica proporciona asesoramiento experto para ayudar a las empresas a optimizar sus procesos tecnológicos, adoptar nuevas tecnologías y resolver desafíos técnicos complejos.',
      howWeDoIt: [
        'Evaluación inicial de la infraestructura tecnológica actual y necesidades futuras.',
        'Análisis de riesgos y oportunidades en la adopción de nuevas tecnologías.',
        'Desarrollo de estrategias personalizadas para transformación digital.',
        'Recomendaciones sobre herramientas, plataformas y mejores prácticas.',
        'Implementación guiada y soporte durante la transición.'
      ],
      benefits: 'Mejora la toma de decisiones, reduce riesgos tecnológicos y acelera la innovación en tu empresa.'
    },
    {
      id: 'talento',
      title: 'Contrato de Talento IT',
      icon: <FaUserTie className="h-6 w-6" />,
      intro: 'El contrato de talento IT se enfoca en la identificación, reclutamiento y colocación de profesionales calificados en tecnología de la información para satisfacer las necesidades específicas de tu equipo.',
      howWeDoIt: [
        'Análisis de las posiciones vacantes y requisitos específicos.',
        'Búsqueda activa de candidatos en plataformas especializadas y redes profesionales.',
        'Evaluación técnica y cultural de los candidatos preseleccionados.',
        'Coordinación de entrevistas y procesos de selección.',
        'Integración del nuevo talento al equipo con capacitación inicial.'
      ],
      benefits: 'Acceso rápido a talento especializado, reducción de tiempos de contratación y mejora de la calidad del equipo IT.'
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Nuestros Servicios Detallados</h1>
        <div className="space-y-16">
          {detailedServices.map((service) => (
            <div 
              key={service.id} 
              id={service.id} 
              className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold">{service.title}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">¿Qué es?</h3>
                  <p className="text-muted-foreground">{service.intro}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Cómo lo hacemos</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {service.howWeDoIt.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Beneficios</h3>
                  <p className="text-muted-foreground">{service.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;