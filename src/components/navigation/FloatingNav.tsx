"use client";
import React from "react";
import styles from "@/components/navigation/page.module.css";
import Image from "next/image";
import Link from "next/link";

const FloatingNav = () => {
  return (
    <div className={styles.FloatingNav}>
      <div className={styles.FloatingNav_MenuContainer}>
        <Image
          className={styles.FloatingNav_Menu}
          src={"/img/menu.svg"}
          alt="menu"
          width={51}
          height={51}
        />
      </div>
      <ul className={styles.FloatingNav_MenuOpt}>
        <li>
          <Link className={styles.FloatingNav_MenuLink} href={"/dashboard"}>dashboard</Link>
        </li>
        <li>
          <Link className={styles.FloatingNav_MenuLink} href={"/dashboard/expense"}>expense</Link>
        </li>
        <li>
          <Link className={styles.FloatingNav_MenuLink} href={"/dashboard/category"}>category</Link>
        </li>
        <li>
          <Link className={styles.FloatingNav_MenuLink} href={"/dashboard/chart"}>chart</Link>
        </li>
      </ul>
    </div>
  );
};

export default FloatingNav;
