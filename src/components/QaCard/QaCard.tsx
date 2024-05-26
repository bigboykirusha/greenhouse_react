import React from 'react';
import styles from './QaCard.module.scss';

interface QaCardProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

const QaCard: React.FC<QaCardProps> = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={`${styles.qaCard} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <h2>
        {question}
        <span className={styles.icon}>{isActive ? '−' : '+'}</span>
      </h2>
      <p dangerouslySetInnerHTML={{ __html: answer }} />
    </div>
  );
};

export default QaCard;
