import React, { useState, useEffect, useRef } from "react";
import styles from "./Qa.module.scss";
import QaCard from "../../components/QaCard/QaCard";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

const Qa: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const cards = t('qa.cards', { returnObjects: true }) as { question: string, answer: string }[];
  const half = Math.ceil(cards.length / 2);

  useEffect(() => {
    isFirstLoad.current = false;
  }, []);

  const renderCard = (faq: { question: string, answer: string }, index: number) => (
    <QaCard
      key={`card_${index}`}
      question={faq.question}
      answer={faq.answer}
      isActive={index === activeIndex}
      onClick={() => handleCardClick(index)}
    />
  );

  return (
    <div className={styles.qa}>
      <div className={styles.qa__title}>{t('qa.title')}</div>
      <div className={styles.qa__cardsContainer}>
        <div className={styles.column}>
          {cards.slice(0, half).map((faq, index) => (
            isFirstLoad.current ? (
              <ScrollAnimation
                key={`animation_${index}`}
                animateIn="fadeInUp"
                delay={(index + 1) / 10 * 1000}
              >
                {renderCard(faq, index)}
              </ScrollAnimation>
            ) : (
              renderCard(faq, index)
            )
          ))}
        </div>
        <div className={styles.column}>
          {cards.slice(half).map((faq, index) => (
            isFirstLoad.current ? (
              <ScrollAnimation
                key={`animation_${index + half}`}
                animateIn="fadeInUp"
                delay={(index + 1 + half) / 10 * 1000}
              >
                {renderCard(faq, index + half)}
              </ScrollAnimation>
            ) : (
              renderCard(faq, index + half)
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qa;
