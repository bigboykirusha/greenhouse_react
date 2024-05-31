import { useEffect } from "react";

const useVhProperty = () => {
   useEffect(() => {
      const setVhProperty = () => {
         const vh = window.innerHeight * 0.01;
         document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      setVhProperty();
      window.addEventListener('resize', setVhProperty);

      return () => {
         window.removeEventListener('resize', setVhProperty);
      };
   }, []);
};

export default useVhProperty;
