import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const leftClick = () => {
    console.log("EN button clicked");
    // Add your logic here
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/home" onClick={scrollToTop}>
        <div className={styles.header__logo}>
          <h1>RE-E</h1>
        </div>
      </Link>
      <div className={`${styles.header__navbar} ${isMenuActive ? styles.active : ""}`}>
        <Link to="/qa" className={styles.header__button} onClick={closeMenu}>
          QA
        </Link>
        <Link to="/contacts" className={styles.header__button} onClick={closeMenu}>
          Contacts
        </Link>
      </div>
      <div className={styles.header__formBox}>
        <div className={`${styles.header__buttonBox} ${styles.languageSelector}`}>
          <button type="button" className={`${styles.toggleBtn} ${styles.active}`} id="btnEN" onClick={leftClick}>EN</button>
        </div>
      </div>
      <div className={`${styles.burgerMenu} ${isMenuActive ? styles.active : ""}`} onClick={toggleMenu}>
        <div className={`${styles.burgerBar} ${styles.bar1}`}></div>
        <div className={`${styles.burgerBar} ${styles.bar2}`}></div>
        <div className={`${styles.burgerBar} ${styles.bar3}`}></div>
      </div>
      {isMenuActive && (
        <div className={styles.fullscreenMenu}>
          <div className={styles.fullscreenMenu__content}>
            <Link to="/home" className={styles.fullscreenMenu__link} onClick={closeMenu}>Home</Link>
            <Link to="/contacts" className={styles.fullscreenMenu__link} onClick={closeMenu}>Contacts</Link>
            <Link to="/qa" className={styles.fullscreenMenu__link} onClick={closeMenu}>QA</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
