"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { ColorResult } from "react-color";
import { useRouter } from "next/navigation";
import CategoryForm from "@/components/category/CategoryForm";

const CategoryNew = () => {
  const [background, setBackground] = useState<string>("#ffffff");

  const handleColors = (color: ColorResult) => {
    setBackground(color.hex + "45");
  };

  return (
    <div style={{ backgroundColor: background }} className={styles.Category}>
      <div className={styles.Category_TitleContainer}>
        <h1 className={styles.Category_Title}>Nueva Categoria</h1>
      </div>
      <div className={styles.Category_LinkContainer}>
        <Link className="linkA" href={"/dashboard/category"}>
          Volver
        </Link>
      </div>
      <CategoryForm handleColors={handleColors} background={background} />
    </div>
  );
};

export default CategoryNew;

/* https://htmlcolorcodes.com/es/ */
