// TextInformation.tsx
import React from 'react';
import Card from '../Card/Card';
import styles from './TextInformation.module.scss';

interface CardData {
   title: string;
   description: string;
   image: string | string[]; // Определите поле image как строку или массив строк
}

interface TextInformationProps {
   cards: CardData[];
}

const TextInformation: React.FC<TextInformationProps> = ({ cards }) => {
   return (
      <section className={styles.textInformation}>
         {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} images={card.image} /> // Передаем путь к изображению в компонент Card
         ))}
      </section>
   );
};

export default TextInformation;
