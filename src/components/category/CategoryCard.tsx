"use client";
import React, { useContext } from "react";
import styles from "@/components/category/page.module.css";
import { ICategory } from "@/libs/interfaces";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import { CategoryContext } from "@/context/CategoryContext";

const CategoryCard: React.FC<ICategory> = ({ _id, categoria, color }) => {
  const { deleteCategory } = useContext(CategoryContext);
  const router: AppRouterInstance = useRouter();
  const colorStyles: React.CSSProperties = {
    border: `1px solid ${color}90`,
    backgroundColor: `${color}51`,
  };

  const handleDeleteCategory = () => {
    if (
      confirm("¿Estas seguro que deseas borrar esta categoria?") &&
      deleteCategory
    ) {
      deleteCategory(_id);
    }
  };

  return (
    <article style={colorStyles} className={styles.CategoryCard}>
      <div className={styles.CategoryCard_NameContainer}>
        <p className={styles.CategoryCard_Name}>{categoria}</p>
      </div>
      <div className={styles.CategoryCard_ButtonGroup}>
        <button
          onClick={() => router.push(`/dashboard/category/${_id}`)}
          className={styles.CategoryCard_ButtonEdit}
        >
          <Image src={"/img/edit.svg"} alt="edit" width={21} height={21} />
        </button>
        <button
          onClick={() => handleDeleteCategory()}
          className={styles.CategoryCard_ButtonDelete}
        >
          <Image src={"/img/delete.svg"} alt="delete" width={21} height={21} />
        </button>
      </div>
    </article>
  );
};

export default CategoryCard;
