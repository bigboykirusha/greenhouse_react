import React from 'react';
import styles from './Placeholder.module.scss';
import useVhProperty from '../../hooks/useVhProperty';

const Placeholder: React.FC = () => {

   useVhProperty();

   return (
      <div className={styles.placeholder}>
         <div className={styles.loader}></div>
      </div>
   );
};

export default Placeholder;
