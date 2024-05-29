import React from "react";
import styles from "./NotFoundBlock.module.scss";
import useVhProperty from "../../hooks/useVhProperty";
import { useTranslation } from "react-i18next";

const NotFoundBlock: React.FC = () => {

  const { t } = useTranslation();
  useVhProperty();


  return (
    <div className={styles.root}>
      <span>🙂</span>
      <h2 className={styles.title}>{t('notfound.title')}</h2>
      <p className={styles.description}>{t('notfound.subtitle')}</p>
    </div>
  );
};

export default NotFoundBlock;