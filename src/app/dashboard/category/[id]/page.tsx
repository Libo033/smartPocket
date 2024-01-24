"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { ColorResult } from "react-color";
import CategoryForm from "@/components/category/CategoryForm";

const CategoryId = ({ params }: { params: { id: string } }) => {
  const [background, setBackground] = useState<string>("#ffffff");

  const handleColors = (color: string) => {
    setBackground(color + "45");
  };

  return (
    <div style={{ backgroundColor: background }} className={styles.Category}>
      <div className={styles.Category_TitleContainer}>
        <h1 className={styles.Category_Title}>Editar Categoria</h1>
      </div>
      <div className={styles.Category_LinkContainer}>
        <Link className="linkA" href={"/dashboard/category"}>
          Volver
        </Link>
      </div>
      <CategoryForm
        handleColors={handleColors}
        background={background}
        id={params.id}
      />
    </div>
  );
};

export default CategoryId;
