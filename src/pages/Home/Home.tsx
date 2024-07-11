import React, { useRef, useEffect } from "react";
import styles from "./Home.module.scss";
import logoWebP from "../../assets/img/bgmobile.webp";
import logoPng from "../../assets/img/bgmobile.png";
import downButton from "../../assets/icons/downButton.svg";
import Greenhouse from "../../components/Greenhouse/Greenhouse";
import Swiper from "../../components/Swiper/Swiper";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from 'react-i18next';
import useVhProperty from "../../hooks/useVhProperty";
import i18n from "i18next";

const Home: React.FC = () => {
  const ghRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const { t } = useTranslation();

  useVhProperty();

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scroll down
        ghRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        // Scroll up
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchStartY.current = touch.clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchEndY.current = touch.clientY;
    };

    const handleTouchEnd = () => {
      const threshold = 50; // Minimum distance for a swipe
      if (touchStartY.current - touchEndY.current > threshold) {
        // Swipe up
        ghRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
      } else if (touchEndY.current - touchStartY.current > threshold) {
        // Swipe down
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.home}>
        <div className={styles.home__main}>
          <div className={styles.home__section}>
            <div className={styles.home__block}>
              <h1
                style={{ fontFamily: i18n.language === 'en' ? 'DM Mono' : 'Montserrat' }}
                className={styles.home__title}
                dangerouslySetInnerHTML={{ __html: t('home.title') }}
              />
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <p className={styles.home__subtitle}>{t('home.subtitle')}</p>
              </ScrollAnimation>
            </div>
          </div>
          <div className={styles.home__logocontainer}>
            <picture>
              <source srcSet={logoWebP} type="image/webp" />
              <source srcSet={logoPng} type="image/png" />
              <img className={styles.home__logo} src={logoPng} alt="Logo" />
            </picture>
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
