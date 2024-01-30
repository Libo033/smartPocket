"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import CategoryForm from "@/components/category/CategoryForm";

const CategoryId = ({ params }: { params: { id: string } }) => {
  const [background, setBackground] = useState<string>("#ffffff");

  const handleColors = (color: string) => {
    setBackground(color + "60");
  };

  return (
    <div className="page">
      <div className="h1_container">
        <h1>Editar Categoria</h1>
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
