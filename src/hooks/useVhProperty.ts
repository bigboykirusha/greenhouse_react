import { useEffect } from "react";

const useVhProperty = () => {
   useEffect(() => {
      const setVhProperty = () => {
         const vh = window.innerHeight * 0.01;
         document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      setVhProperty(); // Вызываем функцию при монтировании компонента
      window.addEventListener('resize', setVhProperty); // Обновляем при изменении размера окна

      return () => {
         window.removeEventListener('resize', setVhProperty); // Удаляем слушатель при размонтировании компонента
      };
   }, []);
};

export default useVhProperty;
