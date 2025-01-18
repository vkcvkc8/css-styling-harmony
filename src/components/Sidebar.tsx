import React from 'react';
import styles from '../styles/ProjectList.module.css';

interface Project {
  id: string;
  title: string;
  address: string;
}

const projects: Project[] = [
  {
    id: "13668",
    title: "Kinderland Learning Academy",
    address: "11 Bonnabrook Dr, Hermitage, TN 37076, United States"
  },
  // Add more projects as needed
];

const Sidebar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by project ID..."
        className={styles.searchInput}
      />
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectAddress}>{project.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;