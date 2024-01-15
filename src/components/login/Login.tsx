import Image from "next/image";
import React, { useId } from "react";
import styles from "@/components/login/page.module.css";

const Login = () => {
  const $emailId = useId();
  const $passwordId = useId();

  return (
    <div className={styles.Login}>
      <div className={styles.Login_Head}>
        <div className={styles.Login_LogoContainer}>
          <Image
            className={styles.Login_Logo}
            src={"/img/smartpocket.svg"}
            alt="money"
            width={120}
            height={120}
          />
        </div>
        <div className={styles.Login_TitleContainer}>
          <h1 className={styles.Login_Title}>Smart Pocket</h1>
        </div>
        <div className={styles.Login_SubTitleContainer}>
          <h2 className={styles.Login_SubTitle}>
            <span>
              Controla tus gastos de manera sencilla y ahorra para tus proximos
              objetivos.
            </span>
          </h2>
        </div>
      </div>
      <div className={styles.Login_Body}>
        <div className={styles.Login_Formulario}>
          <div className={styles.Login_InputContainer}>
            <label htmlFor={$emailId}>Email</label>
            <input className={styles.Login_Input} id={$emailId} type="email" />
          </div>
          <div className={styles.Login_InputContainer}>
            <label htmlFor={$passwordId}>Contraseña</label>
            <input
              className={styles.Login_Input}
              id={$passwordId}
              type="password"
            />
          </div>
          <button>Iniciar sesion</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
