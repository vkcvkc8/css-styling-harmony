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
  const [activeProject, setActiveProject] = React.useState("13668");

  return (
    <div className={styles.searchContainer}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'white', marginBottom: '12px' }}>Project List</h3>
        <input
          type="text"
          placeholder="Search by project ID..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`${styles.projectCard} ${activeProject === project.id ? styles.active : ''}`}
            onClick={() => setActiveProject(project.id)}
          >
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectId}>OUR {project.id}</div>
            <div className={styles.projectAddress}>{project.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;