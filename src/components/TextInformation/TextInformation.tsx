import React from 'react';
import Card from '../Card/Card';
import styles from './TextInformation.module.scss';

interface CardData {
   title: string;
   description: string;
   image: string | string[];
}

// In TextInformation.tsx, update the TextInformationProps interface to include activeIndex
interface TextInformationProps {
   cards: CardData[];
   setActive: (index: number | null) => void; // Keep setActive in props
   activeIndex: number | null; // Add activeIndex
}

const TextInformation: React.FC<TextInformationProps> = ({ cards, setActive, activeIndex }) => {
   return (
      <section className={styles.textInformation}>
         {cards.map((card, index) => (
            <Card
               key={index}
               index={index}
               title={card.title}
               description={card.description}
               images={card.image}
               setActive={setActive}
               activeIndex={activeIndex}
            />
         ))}
      </section>
   );
};

export default TextInformation;