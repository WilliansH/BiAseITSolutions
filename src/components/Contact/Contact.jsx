import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaPaperPlane, FaRocket } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', empresa: '', telefono: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', empresa: '', telefono: '', mensaje: '' });
    setTimeout(() => setSubmitted(false), 5000); // Hide message after 5 seconds
  };

  return (
    <section id="contact" className={styles.contact}>
      <FaPaperPlane className={styles.airplane1} />
      <FaPaperPlane className={styles.airplane2} />
      <FaPaperPlane className={styles.airplane3} />
      <FaPaperPlane className={styles.airplane4} />
      <FaPaperPlane className={styles.airplane5} />
      <FaPaperPlane className={styles.airplane6} />
      <FaPaperPlane className={styles.airplane7} />
      <FaEnvelope className={styles.envelope1} />
      <FaEnvelope className={styles.envelope2} />
      <FaEnvelope className={styles.envelope3} />
      <FaRocket className={styles.rocket1} />
      <FaRocket className={styles.rocket2} />
      <FaRocket className={styles.rocket3} />
      <div className={styles.container}>
        <h2>Contacto</h2>
        <p className={styles.intro}>
          Nos pondremos en contacto contigo lo antes posible. Déjanos tu mensaje y resolveremos tus dudas.
        </p>
        {submitted && (
          <div className={styles.success}>
            ¡Mensaje enviado exitosamente! Te responderemos pronto.
          </div>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <FaBuilding className={styles.icon} />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={form.empresa}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <FaPhone className={styles.icon} />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            <FaPaperPlane className={styles.sendIcon} />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
