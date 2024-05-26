import React, { useState, useEffect } from "react";
import styles from "./Qa.module.scss";
import QaCard from "../../components/QaCard/QaCard";
import faqData from "../../data/faq.json"; 

const Qa: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const handleCardClick = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const half = Math.ceil(faqData.length / 2);

  return (
    <div className={styles.qa}>
      <div className={styles.qa__title}>Find Your Answers</div>
      <div className={styles.qa__cardsContainer}>
        <div className={styles.column}>
          {faqData.slice(0, half).map((faq, index) => (
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
          {faqData.slice(half).map((faq, index) => (
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
