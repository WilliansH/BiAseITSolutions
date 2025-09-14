import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Technologies.module.css';

const Technologies = () => {
  const technologies = [
    { name: 'MySQL', image: '/technologies/MySQL.png' },
    { name: 'SQL Server', image: '/technologies/sqlserver.jpg' },
    { name: 'PostgreSQL', image: '/technologies/postgresql.jpg' },
    { name: 'C#', image: '/technologies/csharp.jpg' },
    { name: 'Python', image: '/technologies/python.jpg' },
    { name: 'PHP', image: '/technologies/php.jpg' },
    { name: 'TypeScript', image: '/technologies/typescript.jpg' },
    { name: 'JavaScript', image: '/technologies/javascript.jpg' },
    { name: 'HTML', image: '/technologies/html.jpg' },
    { name: 'CSS', image: '/technologies/css.jpg' },
    { name: 'Angular', image: '/technologies/angular.jpg' },
    { name: 'React', image: '/technologies/react.jpg' },
    { name: 'Scrum', image: '/technologies/scrum.jpg' },
    { name: 'Agile', image: '/technologies/agile.jpg' }
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
        <h2>Tecnologías y Metodologías</h2>
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
