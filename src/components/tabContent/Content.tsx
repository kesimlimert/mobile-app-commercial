import React from 'react';
import styles from './Content.module.css';

type Props = {
  image: React.ReactNode;
  subTitle: string;
  title: string;
  text: string;
};

export default function Content({ image, subTitle, title, text }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.animationBlock}>{image}</div>
      <div className={styles.textBlock}>
        <h2>{subTitle}</h2>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
