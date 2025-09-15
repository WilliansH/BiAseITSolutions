import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Technologies.module.css';

const Technologies = () => {
  const technologies = [
    { name: 'MySQL', image: '/technologies/MySQL.png' },
    { name: 'SQL Server', image: '/technologies/sqlserver.png' },
    { name: 'PostgreSQL', image: '/technologies/postgresql.png' },
    { name: 'C#', image: '/technologies/csharp.png' },
    { name: 'Python', image: '/technologies/python.png' },
    { name: 'PHP', image: '/technologies/php.png' },
    { name: 'TypeScript', image: '/technologies/typescript.png' },
    { name: 'JavaScript', image: '/technologies/javascript.png' },
    { name: 'HTML', image: '/technologies/html.png' },
    { name: 'CSS', image: '/technologies/css.png' },
    { name: 'Angular', image: '/technologies/angular.png' },
    { name: 'Node.js', image: '/technologies/nodejs.png' },
    { name: 'WordPress', image: '/technologies/wordpress.png' },
    { name: 'Laravel', image: '/technologies/laravel.png' },
    { name: 'React', image: '/technologies/react.png' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section id="technologies" className={styles.technologies}>
      <div className={styles.container}>
        <h2>Tecnologías</h2>
        <Slider {...settings}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techWrapper}>
              <img src={tech.image} alt={tech.name} className={styles.techLogo} />
              <p>{tech.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Technologies;
