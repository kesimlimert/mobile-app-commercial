import React from 'react';
import Phone from '../../../public/Phone2.png';
import styles from './FilterImage.module.css';
import leftBar from '../../../public/leftBar.png';
import rightBar from '../../../public/rightBar.png';

export default function FilterImage() {
  return (
    <div className={styles.imageWrap}>
      <img className={styles.image} src={Phone} alt="Phone" />
      <img className={styles.leftBar} src={leftBar} alt="Left Bar" />
      <img className={styles.rightBar} src={rightBar} alt="Right Bar" />
    </div>
  );
}
