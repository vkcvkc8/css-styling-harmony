import React from 'react';
import styles from '../styles/Layout.module.css';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

const Index = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <header className={styles.header}>
          <img src="/lovable-uploads/4cf47779-3379-4ca1-94c6-899d157a8840.png" alt="Logo" className={styles.logo} />
          <div className={styles.headerRight}>
            <Navigation />
            <div className={styles.profileSection}>
              <img 
                src="/placeholder.svg" 
                alt="Profile" 
                className={styles.profileImage}
              />
            </div>
          </div>
        </header>
        <div className={styles.contentArea}>
          {/* Content will be implemented in next iteration */}
        </div>
      </main>
    </div>
  );
};

export default Index;