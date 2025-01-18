import React from 'react';
import { Bell, MoreHorizontal, Edit, ArrowRight } from 'lucide-react';
import styles from '../styles/Layout.module.css';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

interface ProjectData {
  id: string;
  title: string;
  address: string;
  email: string;
  phone: string;
  contract: {
    date: string;
    moduleQty: number;
    moduleType: string;
    inverterType: string;
    batteryType: string;
    systemSize: {
      ac: number;
      dc: number;
    };
    totalProduction: string;
  };
  dat: {
    designLog: string;
    moduleQty: number;
    moduleType: string;
    inverterType: string;
    batteryType: string;
    systemSize: {
      ac: string;
      dc: string;
    };
    totalProduction: number;
    designVersion: number;
    designerName: string;
    auroraId: string;
    siteCaptureUrl: string;
    changes: {
      layout: string;
      production: string;
    };
    changeOrderRequired: string;
  };
  tools: {
    ahj: string;
    utility: string;
    branch: string;
    lender: string;
  };
}

const sampleData: ProjectData = {
  id: "13668",
  title: "Kinderland Learning Academy",
  address: "11 Bonnabrook Dr, Hermitage, TN 37076",
  email: "kinderland123@gmail.com",
  phone: "+01 27852348",
  contract: {
    date: "12 Dec 2024",
    moduleQty: 35,
    moduleType: "Qcells Q.PEAK DUO BLK ML-G10+/t 400W (Bifacial)",
    inverterType: "Enphase IQ8M Microinverters",
    batteryType: "Enphase IQ8M Microinverters",
    systemSize: {
      ac: 12.98,
      dc: 827.65
    },
    totalProduction: "Enphase IQ8M Microinverters"
  },
  dat: {
    designLog: "7562",
    moduleQty: 35,
    moduleType: "Qcells Q.PEAK DUO BLK ML-G10+/t 400W (Bifacial)",
    inverterType: "---",
    batteryType: "---",
    systemSize: {
      ac: "---",
      dc: "---"
    },
    totalProduction: 27835,
    designVersion: 2,
    designerName: "Ajay Negi",
    auroraId: "---",
    siteCaptureUrl: "---",
    changes: {
      layout: "---",
      production: "---"
    },
    changeOrderRequired: "--"
  },
  tools: {
    ahj: "Greater Salt Lake Municipal Services District",
    utility: "French Broad Electric Membership Corporation",
    branch: "AZPE001",
    lender: "Goodleap"
  }
};

const Index = () => {
  const [projectData, setProjectData] = React.useState<ProjectData>(sampleData);

  return (
    <div>
    <header className={styles.header}>
    <img src="https://i.ibb.co/nrTWJRP/owelogo.png" alt="Logo" className={styles.logo} />
    <div className={styles.headerRight}>
      <Navigation />
    </div>
    <div className={styles.navIcons}>
        <Bell className={styles.icon} />
        <MoreHorizontal className={styles.icon} />
        <div className={styles.profilePic}>
          <img src="/placeholder.svg" alt="Profile" />
        </div>
    </div>

  </header>
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        
        <div className={styles.contentArea}>
          <div className={styles.projectHeader}>
            <div className={styles.projectTitle}>
              <h1 className={styles.projectName}>{projectData.title}</h1>
              <span className={styles.projectId}>OUR {projectData.id}</span>
              <Edit size={20} />
            </div>
            <div className={styles.projectDetails}>
              <span>{projectData.address}</span>
              <span>{projectData.phone}</span>
              <span>{projectData.email}</span>
            </div>
          </div>

          <div className={styles.systemSpecs}>
            <h2>System Specifications</h2>
            <div className={styles.specsGrid}>
              <div className={styles.specCard}>
                <div className={styles.specTitle}>PV Modules</div>
                <div className={styles.specValue}>{projectData.contract.moduleType}</div>
                <div className={styles.specMetrics}>
                  <div>
                    <div className={styles.metricLabel}>DC System Size</div>
                    <div className={styles.metricValue}>{projectData.contract.systemSize.dc} wt</div>
                  </div>
                </div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.specTitle}>Inverters</div>
                <div className={styles.specValue}>{projectData.contract.inverterType}</div>
                <div className={styles.specMetrics}>
                  <div>
                    <div className={styles.metricLabel}>AC System Size</div>
                    <div className={styles.metricValue}>{projectData.contract.systemSize.ac} wt</div>
                  </div>
                </div>
              </div>
              <div className={styles.specCard}>
                <div className={styles.specTitle}>Battery</div>
                <div className={styles.specValue}>Enphase IQ5P</div>
                <div className={styles.specMetrics}>
                  <div>
                    <div className={styles.metricLabel}>Battery Capacity</div>
                    <div className={styles.metricValue}>87.34 wt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.infoColumns}>
            <div className={styles.infoColumn}>
              <h3 className={styles.columnTitle}>Contract Information</h3>
              <div className={styles.infoGrid}>
                {/* Contract Information Items */}
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Date</span>
                  <span className={styles.infoValue}>{projectData.contract.date}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Module QTY</span>
                  <span className={styles.infoValue}>{projectData.contract.moduleQty}</span>
                </div>
                {/* Add more contract info items */}
              </div>
            </div>
            <div className={styles.infoColumn}>
              <h3 className={styles.columnTitle}>DAT Information</h3>
              <div className={styles.infoGrid}>
                {/* DAT Information Items */}
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Design Log Number</span>
                  <span className={styles.infoValue}>{projectData.dat.designLog}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Module QTY</span>
                  <span className={styles.infoValue}>{projectData.dat.moduleQty}</span>
                </div>
                {/* Add more DAT info items */}
              </div>
            </div>
          </div>

          <div className={styles.toolsSection}>
            <div className={styles.toolItem}>
              <span>AHJ</span>
              <span>{projectData.tools.ahj}</span>
              <ArrowRight size={16} />
            </div>
            <div className={styles.toolItem}>
              <span>Utility</span>
              <span>{projectData.tools.utility}</span>
              <ArrowRight size={16} />
            </div>
            <div className={styles.toolItem}>
              <span>Branch</span>
              <span>{projectData.tools.branch}</span>
              <span>Lender</span>
              <span>{projectData.tools.lender}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Index;