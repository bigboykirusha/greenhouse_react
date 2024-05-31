import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
   title: string;
   description: string;
   images: string | string[];
   setActive: (index: number | null) => void; 
   index: number; 
   activeIndex: number | null; 
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
         <h2 className={styles.title}>{title}</h2>
         <p className={styles.description}>{description}</p>
      </div>
   );
};

export default Card;
