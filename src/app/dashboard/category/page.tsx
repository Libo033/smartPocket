import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import CategoryCard from "@/components/category/CategoryCard";

const Category = () => {
  return (
    <div className={styles.Category}>
      <div className={styles.Category_TitleContainer}>
        <h1 className={styles.Category_Title}>Categorias</h1>
      </div>
      <div className={styles.Category_LinkContainer}>
        <Link className="linkA" href={"/dashboard/category/new"}>
          Crear categoria
        </Link>
      </div>
      <section className={styles.Category_CategoryContainer}>
        <CategoryCard _id={"1"} categoria={"Restaurantes"} color={"#8c1d79"} />
        <CategoryCard _id={"2"} categoria={"Alimentacion"} color={"#b9c8f1"} />
        <CategoryCard _id={"3"} categoria={"Medicina"} color={"#7cde79"} />
        <CategoryCard _id={"3"} categoria={"Auto"} color={"#7cde79"} />
        <CategoryCard _id={"3"} categoria={"Varios"} color={"#7cde79"} />
      </section>
    </div>
  );
};

export default Category;
