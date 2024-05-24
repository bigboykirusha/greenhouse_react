// Greenhouse.tsx
import pumpAndPipes from "../../assest/img/pumpAndPipes.png";
import conditioner from "../../assest/img/conditioner.png";
import dehumidifier from "../../assest/img/dehumidifier.png";
import lighting from "../../assest/img/lighting.png";
import animationData from "../../assest/animation/data4.json";
import TextInformation from '../TextInformation/TextInformation';
import React, { useEffect } from "react";
import Lottie from 'lottie-web';
import { Link, useLocation } from "react-router-dom";
import styles from "./Greenhouse.module.scss";
import lightIcon from "../../assest/icons/light.svg";
import spectrumIcon from "../../assest/icons/spectrumIcon.svg";
import fanIcon from "../../assest/icons/fanIcon.svg";
import co2Icon from "../../assest/icons/co2Icon.svg";
import soilIcon from "../../assest/icons/soil.svg";
import wateringSystemsIcon from "../../assest/icons/wateringSystems.svg";
import mobileIcon from "../../assest/icons/mobileIson.svg";
import wifiIcon from "../../assest/icons/wifi.png";
import idCamIcon from "../../assest/icons/idCamIcon.svg";

const Greenhouse: React.FC = () => {

  const cardsData = [
    {
      title: 'Свет',
      description: 'Настраивайте гибкий световой график, подходящий для каждой из стадий роста растения.',
      image: [lightIcon, spectrumIcon],
    },
    {
      title: 'Вентиляция',
      description: 'Контролируйте температуру и влажность воздуха, а также работу всех вентиляторов и вытяжек.',
      image: [fanIcon],
    },
    {
      title: 'Уровень CO2',
      description: 'Обеспечивайте растения необходимым СО2 с нашей системой контроля концентрации газа.',
      image: [co2Icon],
    },
    {
      title: 'Почва',
      description: 'Следите за состоянием почвы с помощью датчиков измерения pH, NPK и температуры.',
      image: [soilIcon],
    },
    {
      title: 'Полив и водоподготовка',
      description: 'Подготавливайте воду, используя систему измерения температуры, pH и TDS, и настраивайте удобный график полива.',
      image: [wateringSystemsIcon],
    },
    {
      title: 'Связь с интернетом и видеонаблюдение',
      description: 'Управляйте теплицей, получайте информацию и наблюдайте за растениями в режиме реального времени.',
      image: [idCamIcon, wifiIcon, mobileIcon],
    },
  ];

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

  useEffect(() => {
    const animationContainer = document.getElementById("animation-container");
    if (animationContainer) {
      Lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData, // передаем загруженные данные анимации
      });
    }
  }, []);

  return (
    <div className={styles.greenhouse}>
      <section className={styles.interactiveSection}>
        {/* Контейнер для анимации */}
        <div id="animation-container" className={styles.animationContainer}></div>
        {/* Изображения */}
        <img id="pump" src={pumpAndPipes} className={styles.layer} data-cell="watering" />
        <img src={conditioner} className={styles.layer} data-cell="ventilation" />
        <img src={dehumidifier} className={styles.layer} data-cell="co2" />
        <img src={lighting} className={styles.layer} data-cell="light" />
      </section>
      <TextInformation cards={cardsData} />
    </div>
  );
};

export default Greenhouse;

