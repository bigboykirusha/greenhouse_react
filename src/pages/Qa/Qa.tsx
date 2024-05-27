import React, { useState, useEffect } from "react";
import styles from "./Qa.module.scss";
import QaCard from "../../components/QaCard/QaCard";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

const Qa: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Save the original overflow style
    const originalOverflow = document.body.style.overflow;
    // Remove overflow: hidden for the Qa component
    document.body.style.overflow = 'auto';

    // Cleanup: restore the original overflow style when the component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const cards = t('qa.cards', { returnObjects: true }) as { question: string, answer: string }[];

  const half = Math.ceil(cards.length / 2);

  return (
    <div className={styles.qa}>
      <div className={styles.qa__title}>{t('qa.title')}</div>
      <div className={styles.qa__cardsContainer}>
        <div className={styles.column}>
          {cards.slice(0, half).map((faq, index) => (
            <ScrollAnimation animateIn="fadeInUp" delay={(index + 1) / 10 * 1000}>
              <QaCard
                key={`card_${index}`}
                question={faq.question}
                answer={faq.answer}
                isActive={index === activeIndex}
                onClick={() => handleCardClick(index)}
              />
            </ScrollAnimation>
          ))}
        </div>
        <div className={styles.column}>
          {cards.slice(half).map((faq, index) => (
            <ScrollAnimation animateIn="fadeInUp" delay={(index + 1 + half) / 10 * 1000}>
              <QaCard
                key={`card_${index + half}`}
                question={faq.question}
                answer={faq.answer}
                isActive={index + half === activeIndex}
                onClick={() => handleCardClick(index + half)}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qa;
