import React from 'react';
import styles from './Swiper.module.scss';

interface SwiperProps {
   targetRef: React.RefObject<HTMLElement>;
   text: string;
   icon: string;
}

const Swiper: React.FC<SwiperProps> = ({ targetRef, text, icon }) => {
   const handleClick = () => {
      targetRef.current?.scrollIntoView({
         behavior: 'smooth'
      });
   };

   return (
      <div onClick={handleClick} className={styles.swiper}>
         <div className={styles.swiper__text}>
            {text}
         </div>
         <img className={styles.swiper__icon} src={icon} alt="Swiper Icon" />
      </div>
   );
};

export default Swiper;
