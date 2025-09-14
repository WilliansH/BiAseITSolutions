import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';

const Home = () => {
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
    <section id="home" className={styles.Home}>
      <div className={styles.content}>
        <h1>Soluciones de Software a la Medida para tu Negocio</h1>
        <p>En BiAse IT Solutions ofrecemos desarrollo personalizado, consultoría tecnológica y reclutamiento de talento IT para impulsar tu empresa.</p>
        <div className={styles.logoSlider}>
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className={styles.logoWrapper}>
                <img src={logo} alt={`Cliente ${index + 1}`} className={styles.logo} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Home;
