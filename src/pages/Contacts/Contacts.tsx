import React from "react";
import styles from "./Contacts.module.scss";
import ContactsCard from "../../components/ContactsCard/ContactsCard"

const Contacts: React.FC = () => {

  const officeData = [
    {
      title: 'Head Office',
      description: `88/8 Moo 9, Green Road,<br />
Bang Phli District,<br />
Samut Prakan 10540,<br />
Thailand`,
    },
    {
      title: 'Contact Us',
      description: `Email: co.th<br />
Phone: +66 (0)2 123 4567<br />
Fax: +66 (0)2 765 4321`,
    },
    {
      title: 'Connect With Us',
      description: `Facebook: /bigboykirusha<br />
Twitter: @bigboykirusha<br />
Instagram: @bigboykirusha`,
    },
    {
      title: 'Legal Information',
      description: `Company Registration No.: 0123456789<br />
VAT ID: TH0123456789`,
    },
    {
      title: 'Customer Service',
      description: `Phone: +66 (0)2 987 6543<br />
Hours: Monday to Friday, 9am to 5pm (ICT)`,
    },
];




  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5959.601588084356!2d44.827630445770254!3d41.681645466144275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440c44cc4ebe8b%3A0xa5d8f7c6f612009!2sTBC%20Bank!5e0!3m2!1sen!2sge!4v1716664545950!5m2!1sen!2sge" width="100%" height="100%" loading="lazy"></iframe>
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