import React, { useEffect } from "react";
import styles from "./Contacts.module.scss";
import ContactsCard from "../../components/ContactsCard/ContactsCard"
import officeData from "../../data/officeData.json"

const Contacts: React.FC = () => {

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5959.601588084356!2d44.827630445770254!3d41.681645466144275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440c44cc4ebe8b%3A0xa5d8f7c6f612009!2sTBC%20Bank!5e0!3m2!1sen!2sge!4v1716664545950!5m2!1sen!2sge" height='100%' width="100%" loading="lazy"></iframe>
      </div>
      <div className={styles.contacts__data}>
        <div className={styles.contacts__title}>Smart Greenhouses Co., Ltd.</div>
        <div className={styles.contacts__cardsContainer}>
          {officeData.map((card, index) => (
            <ContactsCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;