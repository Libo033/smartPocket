import SideBar from "@/components/navigation/SideBar";
import React from "react";
import styles from '@/app/dashboard/page.module.css';

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <SideBar />
    </div>
  );
};

export default Dashboard;
