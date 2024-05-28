import React, { useEffect, useState } from "react";
import Lottie from 'lottie-web';
import styles from "./Greenhouse.module.scss";
import { openDB } from 'idb';

import pumpAndPipesWebP from "../../assets/img/pumpAndPipes.webp";
import pumpAndPipesPng from "../../assets/img/pumpAndPipes.png";
import conditionerWebP from "../../assets/img/conditioner.webp";
import conditionerPng from "../../assets/img/conditioner.png";
import dehumidifierWebP from "../../assets/img/dehumidifier.webp";
import dehumidifierPng from "../../assets/img/dehumidifier.png";
import lightingWebP from "../../assets/img/lighting.webp";
import lightingPng from "../../assets/img/lighting.png";

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
import useVhProperty from "../../hooks/useVhProperty";

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

  useVhProperty();

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
        <picture>
          <source srcSet={pumpAndPipesWebP} type="image/webp" />
          <source srcSet={pumpAndPipesPng} type="image/png" />
          <img id="pump" src={pumpAndPipesPng} className={`${styles.layer} ${activeIndex === 4 ? styles.active : ''}`} data-cell="watering" alt="Pump and Pipes" />
        </picture>
        <picture>
          <source srcSet={conditionerWebP} type="image/webp" />
          <source srcSet={conditionerPng} type="image/png" />
          <img src={conditionerPng} className={`${styles.layer} ${activeIndex === 1 ? styles.active : ''}`} data-cell="ventilation" alt="Conditioner" />
        </picture>
        <picture>
          <source srcSet={dehumidifierWebP} type="image/webp" />
          <source srcSet={dehumidifierPng} type="image/png" />
          <img src={dehumidifierPng} className={`${styles.layer} ${activeIndex === 2 ? styles.active : ''}`} data-cell="co2" alt="Dehumidifier" />
        </picture>
        <picture>
          <source srcSet={lightingWebP} type="image/webp" />
          <source srcSet={lightingPng} type="image/png" />
          <img src={lightingPng} className={`${styles.layer} ${activeIndex === 0 ? styles.active : ''}`} data-cell="light" alt="Lighting" />
        </picture>
      </section>
      <TextInformation cards={cardsData} setActive={setActiveIndex} activeIndex={activeIndex} />
    </div>
  );
};

export default Greenhouse;
