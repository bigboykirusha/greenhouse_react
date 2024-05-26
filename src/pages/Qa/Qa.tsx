import React, { useState, useEffect } from "react";
import styles from "./Qa.module.scss";
import QaCard from "../../components/QaCard/QaCard";

const Qa: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    { question: "How do Smart Greenhouses make gardening easier?", answer: "Our Smart Greenhouses automate the perfect growing conditions, so you can enjoy thriving plants with less fuss. They monitor and adjust temperature, humidity, and CO2 levels for optimal growth." },
    { question: "Can I control the greenhouse from my phone?", answer: "Yes, you can control the greenhouse from your phone using our dedicated mobile app. The app allows you to monitor and adjust settings such as temperature, humidity, and CO2 levels remotely." },
    { question: "Are these greenhouses sustainable?", answer: "Yes, Smart Greenhouses are designed with sustainability in mind. They use energy-efficient systems and materials, and the automated controls help reduce water and energy waste by providing optimal growing conditions." },
    { question: "Will Smart Greenhouses fit in my small garden?", answer: "Smart Greenhouses come in various sizes to fit different spaces, including small gardens. We offer compact models that can be customized to fit your specific garden dimensions while still providing all the smart features." },
    { question: "How tech-savvy do I need to be to use one?", answer: "Our Smart Greenhouses are designed to be user-friendly and require minimal technical knowledge. The mobile app provides an intuitive interface that makes it easy to monitor and adjust settings. Additionally, we offer support and tutorials to help you get started." }
  ];

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
