"use client";
import React from "react";
import styles from "@/components/navigation/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.SideBar}>
      <ul className={styles.SideBar_List}>
        <li className={styles.SideBar_LogoContainer}>
          <Image
            className={styles.SideBar_Logo}
            src={"/img/smartpocket_black.svg"}
            alt="money"
            width={81}
            height={81}
          />
        </li>
        <li
          className={
            pathname === "/dashboard"
              ? styles.SideBar_ListItemSelected
              : styles.SideBar_ListItem
          }
        >
          <Link className={styles.SideBar_Link} href={"/dashboard"}>
            <Image
              src={"/img/dashboard.svg"}
              alt="dashboard"
              width={51}
              height={51}
            />
          </Link>
        </li>
        <li
          className={
            pathname.includes("movements")
              ? styles.SideBar_ListItemSelected
              : styles.SideBar_ListItem
          }
        >
          <Link className={styles.SideBar_Link} href={"/dashboard/movements"}>
            <Image
              src={"/img/expense.svg"}
              alt="expense"
              width={51}
              height={51}
            />
          </Link>
        </li>
        <li
          className={
            pathname.includes("category")
              ? styles.SideBar_ListItemSelected
              : styles.SideBar_ListItem
          }
        >
          <Link className={styles.SideBar_Link} href={"/dashboard/category"}>
            <Image
              src={"/img/category.svg"}
              alt="category"
              width={51}
              height={51}
            />
          </Link>
        </li>
        <li
          className={
            pathname.includes("chart")
              ? styles.SideBar_ListItemSelected
              : styles.SideBar_ListItem
          }
        >
          <Link className={styles.SideBar_Link} href={"/dashboard/chart"}>
            <Image src={"/img/chart.svg"} alt="chart" width={51} height={51} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
