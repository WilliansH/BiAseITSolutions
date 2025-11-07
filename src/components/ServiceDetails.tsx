import React, { useEffect } from 'react';
import { FaShoppingCart, FaLink, FaCog, FaCloud, FaHandshake, FaUserTie } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ServiceDetails = () => {
  const { t } = useTranslation();

  const detailedServices = [
    {
      id: 'ecommerce',
      icon: <FaShoppingCart className="h-6 w-6" />
    },
    {
      id: 'integration',
      icon: <FaLink className="h-6 w-6" />
    },
    {
      id: 'customization',
      icon: <FaCog className="h-6 w-6" />
    },
    {
      id: 'saas',
      icon: <FaCloud className="h-6 w-6" />
    },
    {
      id: 'consulting',
      icon: <FaHandshake className="h-6 w-6" />
    },
    {
      id: 'talent',
      icon: <FaUserTie className="h-6 w-6" />
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
        <h1 className="text-4xl font-bold text-center mb-16">{t('servicesPage.title')}</h1>
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
                <h2 className="text-2xl font-semibold">{t(`services.${service.id}.title`)}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{t(`servicesPage.${service.id}.whatIs`)}</h3>
                  <p className="text-muted-foreground">{t(`servicesPage.${service.id}.intro`)}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{t(`servicesPage.${service.id}.howWeDoIt`)}</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {Array.isArray(t(`servicesPage.${service.id}.howWeDoItList`, { returnObjects: true })) &&
                      (t(`servicesPage.${service.id}.howWeDoItList`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{t(`servicesPage.${service.id}.benefits`)}</h3>
                  <p className="text-muted-foreground">{t(`servicesPage.${service.id}.benefitsText`)}</p>
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