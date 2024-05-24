// Card.tsx
import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
   title: string;
   description: string;
   images: string | string[]; // Определите поле image как строку или массив строк
}

const Card: React.FC<CardProps> = ({ title, description, images }) => {
   return (
      <div className={styles.card}>
         <div className={styles.containerIcons}>
            {Array.isArray(images) ? (
               // Если images является массивом, отобразите несколько изображений
               images.map((image, index) => (
                  <img key={index} src={image} alt={`Icon ${index}`} />
               ))
            ) : (
               // Если images является строкой, отобразите одно изображение
               <img src={images} alt="Icon" />
            )}
         </div>
         <h2>{title}</h2>
         <p>{description}</p>
      </div>
   );
};

export default Card;

