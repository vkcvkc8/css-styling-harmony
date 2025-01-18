import React from 'react';
import styles from '../styles/Layout.module.css';

const Navigation = () => {
  const [activeTab, setActiveTab] = React.useState('general');

  const tabs = [
    { id: 'general', label: 'General Info' },
    { id: 'structural', label: 'Structural Info' },
    { id: 'adders', label: 'Adders' },
    { id: 'notes', label: 'Notes' },
    { id: 'other', label: 'Other Info' },
  ];

  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.navItem} ${
            activeTab === tab.id ? styles.navItemActive : ''
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;