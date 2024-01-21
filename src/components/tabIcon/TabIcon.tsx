import React from 'react';
import styles from './TabIcon.module.css';
import Certified from '../icons/Certified';
import Doc from '../icons/Doc';
import Export from '../icons/Export';
import Filter from '../icons/Filter';
import Scanner from '../icons/Scanner';

type Props = {
  tab: string;
  fillColor: string;
  active: boolean;
};

export default function TabIcon({ tab, fillColor, active }: Props) {
  const icons = {
    'Document Scanner': <Doc fillColor={fillColor} />,
    'Sign & Stamp': <Certified fillColor={fillColor} />,
    'Batch Scanning': <Scanner fillColor={fillColor} />,
    'Advanced Filters': <Filter fillColor={fillColor} />,
    'Export & Share': <Export fillColor={fillColor} />,
  };

  return (
    <div className={styles.circle}>
      {active && <div className={styles.outerCircle}></div>}

      <div className={styles.innerCircle}>
        {icons[tab as keyof typeof icons]}
      </div>
      {active && (
        <>
          <div className={styles.hold + ' ' + styles.left}>
            <div className={styles.fill}></div>
          </div>
          <div className={styles.hold + ' ' + styles.right}>
            <div className={styles.fill}></div>
          </div>
        </>
      )}
    </div>
  );
}
