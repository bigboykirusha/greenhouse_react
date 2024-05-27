import React, { useEffect, useRef, useState } from "react";
import Lottie from 'lottie-web';
import styles from "./Greenhouse.module.scss";

import pumpAndPipes from "../../assest/img/pumpAndPipes.png";
import conditioner from "../../assest/img/conditioner.png";
import dehumidifier from "../../assest/img/dehumidifier.png";
import lighting from "../../assest/img/lighting.png";
import animationData from "../../assest/animation/data4.json";

import lightIcon from "../../assest/icons/light.svg";
import spectrumIcon from "../../assest/icons/spectrumIcon.svg";
import fanIcon from "../../assest/icons/fanIcon.svg";
import co2Icon from "../../assest/icons/co2Icon.svg";
import soilIcon from "../../assest/icons/soil.svg";
import wateringSystemsIcon from "../../assest/icons/wateringSystems.svg";
import mobileIcon from "../../assest/icons/mobileIson.svg";
import wifiIcon from "../../assest/icons/wifi.png";
import idCamIcon from "../../assest/icons/idCamIcon.svg";

import TextInformation from '../TextInformation/TextInformation';
import { useTranslation } from 'react-i18next';

const Greenhouse: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSetActive = (index: number | null) => {
    setActiveIndex(index);
  };

  const { t } = useTranslation();

  const getImageArray = (index: number) => {
    switch (index) {
      case 0:
        return [lightIcon, spectrumIcon];
      case 1:
        return [fanIcon];
      case 2:
        return [co2Icon];
      case 3:
        return [soilIcon];
      case 4:
        return [wateringSystemsIcon];
      case 5:
        return [idCamIcon, wifiIcon, mobileIcon];
      default:
        return [];
    }
  };

  const cardsData: any[] = [];
  const greenhouseCards = t('greenhouse.cards', { returnObjects: true });

  for (const [index, card] of Object.entries(greenhouseCards)) {
    cardsData.push({
      title: card.title,
      description: card.description,
      image: getImageArray(Number(index)),
    });
  }

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
        animationData: animationData,
      });
    }
  }, []);

  return (
    <div className={styles.greenhouse}>
      <section className={styles.interactiveSection}>
        <div id="animation-container" className={styles.animationContainer}></div>
        <img id="pump" src={pumpAndPipes} className={`${styles.layer} ${activeIndex === 3 ? styles.active : ''}`} data-cell="watering" />
        <img src={conditioner} className={`${styles.layer} ${activeIndex === 1 ? styles.active : ''}`} data-cell="ventilation" />
        <img src={dehumidifier} className={`${styles.layer} ${activeIndex === 2 ? styles.active : ''}`} data-cell="co2" />
        <img src={lighting} className={`${styles.layer} ${activeIndex === 0 ? styles.active : ''}`} data-cell="light" />
      </section>
      {/* Pass activeIndex as a prop to TextInformation */}
      <TextInformation cards={cardsData} setActive={handleSetActive} activeIndex={activeIndex} />
    </div>
  );
};

export default Greenhouse;
