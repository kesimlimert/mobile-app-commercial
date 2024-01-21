import React from 'react';
import Phone from '../../../public/Phone2.png';
import styles from './CertifiedImage.module.css';
import Sign from '../../../public/Sign.png';
import Stamp from '../../../public/Stamp.png';

export default function CertifiedImage() {
  return (
    <div className={styles.imageWrap}>
      <img className={styles.image} src={Phone} alt="Phone" />
      <img className={styles.sign} src={Sign} alt="Sign" />
      <img className={styles.stamp} src={Stamp} alt="Batch" />
    </div>
  );
}
