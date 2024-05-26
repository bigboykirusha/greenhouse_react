// QaCard.tsx
import React from 'react';
import styles from './QaCard.module.scss';
import minus from '../../assest/icons/minus.svg'
import plus from '../../assest/icons/plus.svg'

interface QaCardProps {
  question: string;
  answer: string;
  isActive: boolean; // Добавляем проп isActive
  onClick: () => void;
}

const QaCard: React.FC<QaCardProps> = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={`${styles.qaCard} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <div className={styles.qaBlock}>
        <div className={styles.qaTitle}>{question}</div>
        <div className={styles.icon}>{isActive ? <img src={minus} alt="minus" /> : <img src={plus} alt="plus" />}</div>
      </div>
      <div className={`${styles.content} ${isActive ? styles.activeContent : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default QaCard;
