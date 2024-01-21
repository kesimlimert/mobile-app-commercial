import { useState } from 'react';
import styles from './App.module.css';
import Content from './components/tabContent/Content';
import TabIcon from './components/tabIcon/TabIcon';
import DocImage from './components/images/doc/DocImage';
import CertifiedImage from './components/images/certified/CertifiedImage';
import ScannerImage from './components/images/scanner/ScannerImage';
import FilterImage from './components/images/filter/FilterImage';
import ExportImage from './components/images/export/ExportImage';

export function App() {
  const [activeTab, setActiveTab] = useState('Document Scanner');
  const tabs = [
    'Document Scanner',
    'Sign & Stamp',
    'Batch Scanning',
    'Advanced Filters',
    'Export & Share',
  ];

  return (
    <>
      <main className={styles.main}>
        {activeTab === 'Document Scanner' && (
          <Content
            image={<DocImage />}
            subTitle="Document Scanner"
            title="Scan with Ease"
            text="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
          />
        )}
        {activeTab === 'Sign & Stamp' && (
          <Content
            image={<CertifiedImage />}
            subTitle="Sign & Stamp"
            title="One-Tap Focus"
            text="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
          />
        )}
        {activeTab === 'Batch Scanning' && (
          <Content
            image={<ScannerImage />}
            subTitle="Batch Scanning"
            title="Multiple Page Scan"
            text="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
          />
        )}
        {activeTab === 'Advanced Filters' && (
          <Content
            image={<FilterImage />}
            subTitle="Advanced fılters"
            title="Unique Filters"
            text="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
          />
        )}
        {activeTab === 'Export & Share' && (
          <Content
            image={<ExportImage />}
            subTitle="Export & Share"
            title="All-Round Conversion"
            text="Export your scans as PDF,JPG,ZIP,TXT and Word."
          />
        )}
      </main>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <TabIcon
              fillColor={activeTab === tab ? 'rgba(3, 129, 255, 1)' : '#666666'}
              active={activeTab === tab ? true : false}
              tab={tab}
            />
            {tab}
          </button>
        ))}
      </div>
    </>
  );
}
