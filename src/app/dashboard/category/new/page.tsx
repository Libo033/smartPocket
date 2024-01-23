"use client";
import React, { useId, useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { CirclePicker, ColorResult, HuePicker, SliderPicker } from "react-color";

const CategoryNew = () => {
  const [background, setBackground] = useState<string>("#ffffff");
  const $name = useId();
  const $color = useId();

  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];

  const handleColors = (color: ColorResult) => {
    setBackground(color.hex + "30");
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
      <form className={styles.Category_Form} action="post">
        <div className={styles.Category_FormContainer}>
          <label htmlFor={$name}>Nombre</label>
          <input type="text" id={$name} required />
        </div>
        <div className={styles.Category_FormContainer}>
          <label htmlFor={$color}>Color</label>
          <HuePicker
            className={styles.Category_FormColorPicker2}
            color={background}
            onChange={(color: ColorResult) => handleColors(color)}
          />
          <CirclePicker
            className={styles.Category_FormColorPicker}
            onChange={(color: ColorResult) => handleColors(color)}
            circleSpacing={21}
            circleSize={45}
            colors={colors}
          />
        </div>
        <div className={styles.Category_FormButtonContainer}>
          <button className={styles.Category_FormButton}>Crear</button>
        </div>
      </form>
    </div>
  );
};

export default CategoryNew;

/* https://htmlcolorcodes.com/es/ */
