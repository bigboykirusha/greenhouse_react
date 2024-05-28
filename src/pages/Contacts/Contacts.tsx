import React, { useEffect } from "react";
import styles from "./Contacts.module.scss";
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import { useTranslation } from 'react-i18next';
import useVhProperty from "../../hooks/useVhProperty";

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  useVhProperty();

  const cards = t('contact.cards', { returnObjects: true }) as { title: string, description: string }[];

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.074820537232!2d98.292188075822!3d7.991210304368035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTknMjguMyJOIDk4wrAxNyc0MS4yIkU!5e0!3m2!1sen!2sge!4v1716934720025!5m2!1sen!2sge" height='100%' width="100%" loading="lazy"></iframe>
      </div>
      <div className={styles.contacts__data}>
        <div className={styles.contacts__title}>{t('contact.companyName')}</div>
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
