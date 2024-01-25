"use client";
import React, { useState } from "react";
import styles from "@/components/navigation/page.module.css";
import Image from "next/image";
import Link from "next/link";

const FloatingNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.FloatingNav}>
      <div
        onClick={() => setOpen(true)}
        className={styles.FloatingNav_MenuContainer}
      >
        <Image
          className={styles.FloatingNav_Menu}
          src={"/img/menu.svg"}
          alt="menu"
          width={51}
          height={51}
        />
      </div>
      <ul
        style={
          open
            ? { transform: "translateY(0vh)" }
            : { transform: "translateY(-100vh)" }
        }
        className={styles.FloatingNav_MenuOpt}
      >
        <li>
          <Link
            className={styles.FloatingNav_MenuLink}
            onClick={() => setOpen(false)}
            href={"/dashboard"}
          >
            tablero
          </Link>
        </li>
        <li>
          <Link
            className={styles.FloatingNav_MenuLink}
            onClick={() => setOpen(false)}
            href={"/dashboard/movements"}
          >
            movimientos
          </Link>
        </li>
        <li>
          <Link
            className={styles.FloatingNav_MenuLink}
            onClick={() => setOpen(false)}
            href={"/dashboard/category"}
          >
            categorias
          </Link>
        </li>
        <li>
          <Link
            className={styles.FloatingNav_MenuLink}
            onClick={() => setOpen(false)}
            href={"/dashboard/chart"}
          >
            graficos
          </Link>
        </li>
        <li className={styles.FloatingNav_MenuLogoContainer}>
          <Image
            className={styles.FloatingNav_MenuLogo}
            src={"/img/smartpocket_black.svg"}
            alt="smartpocket"
            width={90}
            height={90}
          />
          <span>Smart Pocket</span>
        </li>
        <li onClick={() => setOpen(false)} className={styles.FloatingNav_Close}>
          <Image src={"/img/close.svg"} alt="cross" width={33} height={33} />
        </li>
      </ul>
    </div>
  );
};

export default FloatingNav;
