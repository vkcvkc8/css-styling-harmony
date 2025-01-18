import React from 'react';
import styles from '../styles/Layout.module.css';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

interface ProjectData {
  id: string;
  title: string;
  address: string;
  email: string;
  phone: string;
  pvModules: {
    type: string;
    wattage: number;
    quantity: number;
  };
  inverter: {
    type: string;
    quantity: number;
  };
  battery: {
    type: string;
    capacity: string;
  };
  contract: {
    date: string;
    number: string;
  };
  dat: {
    designLog: string;
    status: string;
  };
}

const sampleData: ProjectData = {
  id: "13668",
  title: "Kinderland Learning Academy",
  address: "11 Bonnabrook Dr, Hermitage, TN 37076",
  email: "kinderland123@gmail.com",
  phone: "+01 27852348",
  pvModules: {
    type: "REC Alpha Pure",
    wattage: 400,
    quantity: 24
  },
  inverter: {
    type: "Enphase IQ8+",
    quantity: 24
  },
  battery: {
    type: "Enphase IQ Battery",
    capacity: "10kWh"
  },
  contract: {
    date: "2024-03-15",
    number: "CNT-2024-001"
  },
  dat: {
    designLog: "DL-2024-001",
    status: "Approved"
  }
};

const Index = () => {
  const [projectData, setProjectData] = React.useState<ProjectData>(sampleData);

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
          </div>
        </header>
        <div className={styles.contentArea}>
          <div className={styles.generalInfo}>
            <div className={styles.infoSection}>
              <h3 className={styles.infoTitle}>Project Information</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Project ID</span>
                  <span className={styles.infoValue}>OUR {projectData.id}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Address</span>
                  <span className={styles.infoValue}>{projectData.address}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>{projectData.email}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Phone</span>
                  <span className={styles.infoValue}>{projectData.phone}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.infoSection}>
              <h3 className={styles.infoTitle}>System Specifications</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>PV Modules</span>
                  <span className={styles.infoValue}>{projectData.pvModules.type}</span>
                  <span className={styles.infoValue}>{projectData.pvModules.wattage}W x {projectData.pvModules.quantity}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Inverter</span>
                  <span className={styles.infoValue}>{projectData.inverter.type}</span>
                  <span className={styles.infoValue}>Quantity: {projectData.inverter.quantity}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Battery</span>
                  <span className={styles.infoValue}>{projectData.battery.type}</span>
                  <span className={styles.infoValue}>{projectData.battery.capacity}</span>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <h3 className={styles.infoTitle}>Contract Information</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Contract Date</span>
                  <span className={styles.infoValue}>{projectData.contract.date}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Contract Number</span>
                  <span className={styles.infoValue}>{projectData.contract.number}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>DAT Design Log</span>
                  <span className={styles.infoValue}>{projectData.dat.designLog}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>DAT Status</span>
                  <span className={styles.infoValue}>{projectData.dat.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;