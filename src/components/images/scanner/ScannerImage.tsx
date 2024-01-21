import React from 'react';
import Phone from '../../../public/Phone3.png';
import styles from './ScannerImage.module.css';
import Front from '../../../public/File Preview.png';
import Middle from '../../../public/File Preview2.png';
import Back from '../../../public/File Preview3.png';

export default function ScannerImage() {
  return (
    <div className={styles.imageWrap}>
      <img className={styles.image} src={Phone} alt="Phone" />
      <img className={styles.back} src={Front} />
      <img className={styles.middle} src={Middle} />
      <img className={styles.front} src={Back} />
    </div>
  );
}
