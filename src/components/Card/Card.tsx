import React, { useState } from 'react';
import styles from './Card.module.scss';

interface CardProps {
   title: string;
   description: string;
   images: string | string[]; // Define the image field as a string or an array of strings
   setActive: (index: number | null) => void; // Add setActive function
   index: number; // Add index
   activeIndex: number | null; // Add activeIndex
}

const Card: React.FC<CardProps> = ({ title, description, images, setActive, index, activeIndex }) => {
   const isActive = activeIndex === index;

   const handleMouseEnter = () => {
      setActive(index);
   };

   const handleMouseLeave = () => {
      setActive(null);
   };

   return (
      <div
         className={`${styles.card} ${isActive ? styles.active : ''}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <div className={styles.containerIcons}>
            {Array.isArray(images) ? (
               images.map((image, idx) => (
                  <img key={idx} src={image} alt={`Icon ${idx}`} />
               ))
            ) : (
               <img src={images} alt="Icon" />
            )}
         </div>
         <h2>{title}</h2>
         <p>{description}</p>
      </div>
   );
};

export default Card;