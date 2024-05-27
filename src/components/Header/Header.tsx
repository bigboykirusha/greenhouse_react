import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import i18n from "i18next";

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const { t } = useTranslation();

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
      <div className={styles.header__navbar}>
        <Link style={{ fontFamily: i18n.language === 'en' ? 'DM Mono' : 'Montserrat' }} to="/qa" className={styles.header__button}>
        {t('header.qa')}
        </Link>
        <Link style={{ fontFamily: i18n.language === 'en' ? 'DM Mono' : 'Montserrat' }} to="/contacts" className={styles.header__button}>
          {t('header.contacts')}
        </Link>
        <LanguageSwitcher />
      </div>
      <div className={`${styles.burgerMenu} ${isMenuActive ? styles.active : ""}`} onClick={toggleMenu}>
        <div className={`${styles.burgerBar} ${styles.bar1}`}></div>
        <div className={`${styles.burgerBar} ${styles.bar2}`}></div>
        <div className={`${styles.burgerBar} ${styles.bar3}`}></div>
      </div>
      {isMenuActive && (
        <div className={styles.fullscreenMenu}>
          <div className={styles.fullscreenMenu__content}>
            <Link style={{ fontFamily: i18n.language === 'en' ? 'DM Mono' : 'Montserrat' }} to="/home" className={styles.fullscreenMenu__link} onClick={closeMenu}>{t('header.home')}</Link>
            <Link style={{ fontFamily: i18n.language === 'en' ? 'DM Mono' : 'Montserrat' }} to="/contacts" className={styles.fullscreenMenu__link} onClick={closeMenu}>{t('header.contacts')}</Link>
            <Link style={{ fontFamily: i18n.language === 'en' ? 'DM Mono' : 'Montserrat' }} to="/qa" className={styles.fullscreenMenu__link} onClick={closeMenu}>{t('header.qa')}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
