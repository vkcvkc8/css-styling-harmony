import React from 'react';
import styles from '../styles/Navigation.module.css';
import { Bell, MoreHorizontal } from 'lucide-react';

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
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.navItem} ${
              activeTab === tab.id ? styles.navItemActive : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className={styles.navIcons}>
        <Bell className={styles.icon} />
        <MoreHorizontal className={styles.icon} />
        <div className={styles.profilePic}>
          <img src="/placeholder.svg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;