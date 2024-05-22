import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import logo from "../../assest/img/logo.svg";
import downButton from "../../assest/icons/downButton.svg";

const Home: React.FC = () => {
  return (
   <div className={styles.home}>
    <div className={styles.home__section}>
      <div className={styles.home__block}>
        <h1 className={styles.home__title}>Smart<br/>greenhouses</h1>
        <p className={styles.home__subtitle}>Grow your garden smarter with our Smart Greenhouses. Packed with clever tech to keep your plants happy, our greenhouses make it easy to maintain the perfect environment. Your greens will be healthier, and you'll have more time to relax and enjoy. It's all about getting the best from nature, effortlessly. Welcome to your garden's bright future!</p>
      </div>
      <img className={styles.home__logo} src={logo} alt=""/>
    </div>
      <div className={styles.home__swipe}>
        <div className={styles.home__text}>Explore Green Tech</div>
        <img className={styles.home__arrow} src={downButton} alt=""/>
      </div>
   </div>
  );
};

export default Home;