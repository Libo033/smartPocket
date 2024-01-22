import React from "react";
import styles from "@/app/register/page.module.css";
import RegisterForm from "@/components/register/RegisterForm";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles.Register}>
      <div>
        <div className={styles.Register_LogoContainer}>
          <Image
            className={styles.Register_Logo}
            src={"/img/register.svg"}
            alt="lock"
            width={60}
            height={60}
          />
        </div>
        <div className={styles.Register_Heading}>
          <h2>Registrate</h2>
        </div>
      </div>
      <RegisterForm />
      <Link className="linkA" href={"/"}>
        Ya tenes cuenta? Inicia sesion!
      </Link>
    </div>
  );
};

export default Register;
