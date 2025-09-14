import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Clients.module.css';

const Clients = () => {
  const logos = Array.from({ length: 12 }, (_, i) => `/Logo/partners/Logo-${String(i + 1).padStart(2, '0')}.jpg`);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section id="clients" className={styles.clients}>
      <div className={styles.container}>
        <h2>Nuestros Clientes</h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <img src={logo} alt={`Cliente ${index + 1}`} className={styles.logo} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
