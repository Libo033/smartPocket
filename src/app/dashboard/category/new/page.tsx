"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import CategoryForm from "@/components/category/CategoryForm";

const CategoryNew = () => {
  const [background, setBackground] = useState<string>("#ffffff");

  const handleColors = (color: string) => {
    setBackground(color + "60");
  };

  return (
    <div className="page">
      <div className="h1_container">
        <h1>Nueva Categoria</h1>
      </div>
      <div className={styles.Category_LinkContainer}>
        <Link className="linkA" href={"/dashboard/category"}>
          Volver
        </Link>
      </div>
      <CategoryForm
        handleColors={handleColors}
        background={background}
        id={null}
      />
    </div>
  );
};

export default CategoryNew;

/* https://htmlcolorcodes.com/es/ */
