import React, { useEffect, useState } from "react";
import Lottie from 'lottie-web';
import styles from "./Greenhouse.module.scss";
import { openDB } from 'idb';

import pumpAndPipes from "../../assets/img/pumpAndPipes.png";
import conditioner from "../../assets/img/conditioner.png";
import dehumidifier from "../../assets/img/dehumidifier.png";
import lighting from "../../assets/img/lighting.png";

import lightIcon from "../../assets/icons/light.svg";
import spectrumIcon from "../../assets/icons/spectrumIcon.svg";
import fanIcon from "../../assets/icons/fanIcon.svg";
import co2Icon from "../../assets/icons/co2Icon.svg";
import soilIcon from "../../assets/icons/soil.svg";
import wateringSystemsIcon from "../../assets/icons/wateringSystems.svg";
import mobileIcon from "../../assets/icons/mobileIson.svg";
import wifiIcon from "../../assets/icons/wifi.png";
import idCamIcon from "../../assets/icons/idCamIcon.svg";

import TextInformation from '../TextInformation/TextInformation';
import { useTranslation } from 'react-i18next';

const Greenhouse: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [animationData, setAnimationData] = useState<any>(null);
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

  const cardsData = Object.entries(t('greenhouse.cards', { returnObjects: true })).map(([index, card]) => ({
    title: card.title,
    description: card.description,
    image: getImageArray(Number(index)),
  }));

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
    const loadAnimationData = async () => {
      const db = await openDB('animationsDB', 1, {
        upgrade(db) {
          db.createObjectStore('animations');
        },
      });

      const cachedAnimationData = await db.get('animations', 'data4');
      if (cachedAnimationData) {
        setAnimationData(cachedAnimationData);
      } else {
        import("../../assets/animation/data4.json")
          .then(data => {
            db.put('animations', data.default, 'data4');
            setAnimationData(data.default);
          })
          .catch(err => console.error("Failed to load animation data", err));
      }
    };

    loadAnimationData();
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
  }, [animationData]);

  return (
    <div className={styles.greenhouse}>
      <section className={styles.interactiveSection}>
        <div id="animation-container" className={styles.animationContainer}></div>
        <img id="pump" src={pumpAndPipes} className={`${styles.layer} ${activeIndex === 3 ? styles.active : ''}`} data-cell="watering" />
        <img src={conditioner} className={`${styles.layer} ${activeIndex === 1 ? styles.active : ''}`} data-cell="ventilation" />
        <img src={dehumidifier} className={`${styles.layer} ${activeIndex === 2 ? styles.active : ''}`} data-cell="co2" />
        <img src={lighting} className={`${styles.layer} ${activeIndex === 0 ? styles.active : ''}`} data-cell="light" />
      </section>
      <TextInformation cards={cardsData} setActive={setActiveIndex} activeIndex={activeIndex} />
    </div>
  );
};

export default Greenhouse;
