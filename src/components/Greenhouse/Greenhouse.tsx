import React, { useEffect, useRef } from "react";
import Lottie from 'lottie-web';
import { Link, useLocation } from "react-router-dom";
import styles from "./Greenhouse.module.scss";
import pumpAndPipes from "../../assest/img/pumpAndPipes.png";
import conditioner from "../../assest/img/conditioner.png";
import dehumidifier from "../../assest/img/dehumidifier.png";
import lighting from "../../assest/img/lighting.png";
import animationData from "../../assest/animation/data4.json";

const Greenhouse: React.FC = () => {
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
      <section className={styles.textInformation}>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
      </section>
    </div>
  );
};

export default Greenhouse;
