import React, { useState } from 'react';
import styles from './ContactsCard.module.scss';

interface ContactsCardProps {
   title: string;
   description: string;
}

const ContactsCard: React.FC<ContactsCardProps> = ({ title, description }) => {
   return (
      <div className={styles.contactsCard}>
         <h2>{title}</h2>
         <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
   );
};

export default ContactsCard;