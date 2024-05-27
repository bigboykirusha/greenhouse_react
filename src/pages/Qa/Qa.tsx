import React, { useState, useEffect } from "react";
import styles from "./Qa.module.scss";
import QaCard from "../../components/QaCard/QaCard";
import { useTranslation } from "react-i18next";

const Qa: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const handleCardClick = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const cards = t('qa.cards', { returnObjects: true }) as { question: string, answer: string }[]; // Явно указываем тип данных для массива cards

  const half = Math.ceil(cards.length / 2);

  return (
    <div className={styles.qa}>
      <div className={styles.qa__title}>{t('qa.title')}</div>
      <div className={styles.qa__cardsContainer}>
        <div className={styles.column}>
          {cards.slice(0, half).map((faq, index) => (
            <QaCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={index === activeIndex}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className={styles.column}>
          {cards.slice(half).map((faq, index) => (
            <QaCard
              key={index + half}
              question={faq.question}
              answer={faq.answer}
              isActive={index + half === activeIndex}
              onClick={() => handleCardClick(index + half)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qa;
