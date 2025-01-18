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
          <Navigation />
        </header>
        <div className="animate-fade">
          {/* Content will be added based on selected tab */}
          <h1>Welcome to Your Project Dashboard</h1>
        </div>
      </main>
    </div>
  );
};

export default Index;