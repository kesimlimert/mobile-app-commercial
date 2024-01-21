import React from 'react';
import Phone from '../../../public/Phone.png';
import styles from './DocImage.module.css';

export default function DocImage() {
  return (
    <div className={styles.imageWrap}>
      <img className={styles.image} src={Phone} alt="Phone" />
    </div>
  );
}
