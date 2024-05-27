import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <div className={styles.languageSwitcherButton} onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'EN' : 'RU'}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
