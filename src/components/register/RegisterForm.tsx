import React, { useId } from "react";
import styles from "@/components/register/page.module.css";

const RegisterForm = () => {
  const $name = useId();
  const $subName = useId();
  const $email = useId();
  const $password = useId();
  const $repeatPassword = useId();

  return (
    <div className={styles.RegisterForm}>
      <div className={styles.RegisterForm_DoubleContainer}>
        <div className={styles.RegisterForm_Container}>
          <label htmlFor={$name}>Nombre</label>
          <input type="text" id={$name} required />
        </div>
        <div className={styles.RegisterForm_Container}>
          <label htmlFor={$subName}>Apellido</label>
          <input type="text" id={$subName} required />
        </div>
      </div>
      <div className={styles.RegisterForm_Container}>
        <label htmlFor={$email}>Email</label>
        <input type="email" id={$email} required />
      </div>
      <div className={styles.RegisterForm_Container}>
        <label htmlFor={$password}>Contraseña</label>
        <input type="password" id={$password} required />
      </div>
      <div className={styles.RegisterForm_Container}>
        <label htmlFor={$repeatPassword}>Repetir contraseña</label>
        <input type="password" id={$repeatPassword} required />
      </div>
      <button className={styles.RegisterForm_Button}>registrate</button>
    </div>
  );
};

export default RegisterForm;
