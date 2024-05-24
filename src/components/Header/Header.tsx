import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {

  const leftClick = () => {
    console.log("EN button clicked");
    // Добавьте вашу логику здесь
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <header className={styles.header} >
      <Link to="/home" onClick={scrollToTop}>
        <div className={styles.header__logo}>
          <h1>RE-E</h1>
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
          <button type="button" className={`${styles.toggleBtn} ${styles.active}`} id="btnEN" onClick={leftClick}>EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;