import React, { useEffect, useRef } from "react";
import styles from "./Home.module.scss";
import logo from "../../assest/img/bgmobile.png";
import bg from "../../assest/img/bgpc.png";
import downButton from "../../assest/icons/downButton.svg";
import Greenhouse from "../../components/Greenhouse/Greenhouse";
import Swiper from "../../components/Swiper/Swiper";
import ScrollAnimation from "react-animate-on-scroll";

const Home: React.FC = () => {

  const ghRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function setVhProperty() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVhProperty(); // Вызываем функцию при монтировании компонента

    window.addEventListener('resize', setVhProperty); // Обновляем при изменении размера окна

    return () => {
      window.removeEventListener('resize', setVhProperty); // Удаляем слушатель при размонтировании компонента
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.home}>
        <div className={styles.home__main}>
          <div className={styles.home__section}>
            <div className={styles.home__block}>
              <ScrollAnimation animateIn="fadeInUp">
                <h1 className={styles.home__title}>Smart<br />greenhouses</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <p className={styles.home__subtitle}>Grow your garden smarter with our Smart Greenhouses. Packed with clever tech to keep your plants happy, our greenhouses make it easy to maintain the perfect environment. Your greens will be healthier, and you'll have more time to relax and enjoy. It's all about getting the best from nature, effortlessly. Welcome to your garden's bright future!</p>
              </ScrollAnimation>
            </div>
          </div>
          <div className={styles.home__logocontainer}>
            <img className={styles.home__logo} src={logo} alt="" />
          </div>
        </div>
        <Swiper targetRef={ghRef} text="Explore Green Tech" icon={downButton} /> {/* Используем наш новый компонент */}
        <img className={styles.home__picture} src={bg} alt="" />
      </div>
      <div ref={ghRef}>
        <Greenhouse />
      </div>
    </div>
  );
};

export default Home;