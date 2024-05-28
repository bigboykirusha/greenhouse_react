import React, { useEffect } from "react";
import styles from "./Contacts.module.scss";
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import { useTranslation } from 'react-i18next'; // Импортируем хук для использования переводов
import i18n from "i18next";
import useVhProperty from "../../hooks/useVhProperty";

const Contacts: React.FC = () => {
  const { t } = useTranslation(); // Используем хук для доступа к переводам

  useVhProperty();

  const cards = t('contact.cards', { returnObjects: true }) as { title: string, description: string }[]; // Явно указываем тип данных для массива cards

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5959.601588084356!2d44.827630445770254!3d41.681645466144275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440c44cc4ebe8b%3A0xa5d8f7c6f612009!2sTBC%20Bank!5e0!3m2!1sen!2sge!4v1716664545950!5m2!1sen!2sge" height='100%' width="100%" loading="lazy"></iframe>
      </div>
      <div className={styles.contacts__data}>
        <div style={{ fontFamily: i18n.language === 'en' ? 'DM Mono' : 'Montserrat' }} className={styles.contacts__title}>{t('contact.companyName')}</div> {/* Используем перевод для названия компании */}
        <div className={styles.contacts__cardsContainer}>
          {cards.map((card, index) => (
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
