import Image from "next/image";
import React, { useId } from "react";
import styles from "@/components/login/page.module.css";
import Link from "next/link";

const LoginForm = () => {
  const $emailId = useId();
  const $passwordId = useId();

  return (
    <div className={styles.Login_Formulario}>
      <p className={styles.Login_FormularioTitle}>
        Administra, ahorra, prospera.
      </p>
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
      <div className={styles.Login_LinkContainer}>
        <Link className={styles.Login_Link} href={"/recover_password"}>
          Olvidaste tu contraseña?
        </Link>
        <Link className={styles.Login_Link} href={"/register"}>
          No tenes una cuenta? Registrate!
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
