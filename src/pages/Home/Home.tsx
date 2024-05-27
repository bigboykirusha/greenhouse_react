import React, { useEffect, useRef } from "react";
import styles from "./Home.module.scss";
import logo from "../../assest/img/bgmobile.png";
import downButton from "../../assest/icons/downButton.svg";
import Greenhouse from "../../components/Greenhouse/Greenhouse";
import Swiper from "../../components/Swiper/Swiper";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

const Home: React.FC = () => {

  const ghRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

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
                <h1 style={{ fontFamily: i18n.language === 'en' ? 'DM Mono' : 'Montserrat' }} className={styles.home__title} dangerouslySetInnerHTML={{ __html: t('home.title') }}></h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <p className={styles.home__subtitle}>{t('home.subtitle')}</p>
              </ScrollAnimation>
            </div>
          </div>
          <div className={styles.home__logocontainer}>
            <img className={styles.home__logo} src={logo} alt="" />
          </div>
        </div>
        <Swiper targetRef={ghRef} text={t('home.exploreGreenTech')} icon={downButton} />
      </div>
      <div ref={ghRef}>
        <Greenhouse />
      </div>
    </div>
  );
};

export default Home;