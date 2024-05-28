// QaCard.tsx
import React from 'react';
import styles from './QaCard.module.scss';
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'
interface QaCardProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

const QaCard: React.FC<QaCardProps> = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={`${styles.qaCard} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <div className={styles.qaBlock}>
        <div className={styles.qaTitle}>{question}</div>
        <div className={styles.icon}>
          <img src={isActive ? minus : plus} alt={isActive ? "minus" : "plus"} />
        </div>
      </div>
      <div className={`${styles.content} ${isActive ? styles.activeContent : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default QaCard;