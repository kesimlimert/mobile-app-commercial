import React from 'react';
import Phone from '../../../public/Phone4.png';
import styles from './ExportImage.module.css';
import Pdf from '../../../public/pdf.png';
import Jpg from '../../../public/jpg.png';
import Txt from '../../../public/txt.png';
import Vector from '../../../public/Vector.png';

export default function ExportImage() {
  return (
    <div className={styles.imageWrap}>
      <img className={styles.image} src={Phone} alt="Phone" />
      <div className={styles.box}>
        <img className={styles.vector} src={Vector} alt="Vector" />
        <img className={styles.pdf} src={Pdf} alt="Pdf" />
      </div>
      <img className={styles.jpg} src={Jpg} alt="Jpg" />
      <img className={styles.txt} src={Txt} alt="Txt" />
    </div>
  );
}
