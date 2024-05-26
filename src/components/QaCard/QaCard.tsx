// QaCard.tsx
import React from 'react';
import styles from './QaCard.module.scss';

interface QaCardProps {
  question: string;
  answer: string;
  isActive: boolean; // Добавляем проп isActive
  onClick: () => void;
}

const QaCard: React.FC<QaCardProps> = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={`${styles.qaCard} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <h2>
        {question}
        <div className={styles.icon}>{isActive ? '−' : '+'}</div>
      </h2>
      <div className={`${styles.content} ${isActive ? styles.activeContent : ''}`}>
        <p dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </div>
  );
};

export default QaCard;
