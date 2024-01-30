"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import CategoryCard from "@/components/category/CategoryCard";
import CategoryCardPlaceholder from "@/components/category/CategoryCardPlaceholder";
import { CategoryContext } from "@/context/CategoryContext";

const Category = () => {
  const { categories, load } = useContext(CategoryContext);

  return (
    <div className="page">
      <div className="h1_container">
        <h1>Categorias</h1>
      </div>
      <div className={styles.Category_LinkContainer}>
        <Link className="linkA" href={"/dashboard/category/new"}>
          Crear categoria
        </Link>
      </div>
      <section className={styles.Category_CategoryContainer}>
        {load ? (
          categories.length > 0 ? (
            categories.map((c) => <CategoryCard key={c._id} {...c} />)
          ) : (
            <p className={styles.Category_CreateCategory}>
              Crea nuevas categorias para que aparezcan aqui
            </p>
          )
        ) : (
          <>
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
          </>
        )}
      </section>
    </div>
  );
};

export default Category;
