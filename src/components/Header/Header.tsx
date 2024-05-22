import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {

  const leftClick = () => {
    console.log("EN button clicked");
    // Добавьте вашу логику здесь
  };

  const rightClick = () => {
    console.log("RU button clicked");
    // Добавьте вашу логику здесь
  };

  return (
    <header className={styles.header} >
        <Link to="/home/">
          <div className={styles.header__logo}>
              <h1>RE-R</h1>
          </div>
        </Link>
        <div className={styles.header__navbar}>
          <Link to="/QA" className={styles.header__button}>
            QA
          </Link>
          <Link to="/Contacts" className={styles.header__button}>
            Contacts
          </Link>
        </div>
        <div className={styles.header__formBox}>
          <div className={`${styles.header__buttonBox} ${styles.languageSelector}`}>
            <div id="btn"></div>
            <button type="button" className={`${styles.toggleBtn} ${styles.active}`} id="btnEN" onClick={leftClick}>EN</button>
            <button type="button" className={styles.toggleBtn} id="btnRU" onClick={rightClick}>RU</button>
          </div>
        </div>
    </header>
  );
};

export default Header;