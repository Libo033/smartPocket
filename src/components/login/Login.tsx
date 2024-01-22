import Image from "next/image";
import React from "react";
import styles from "@/components/login/page.module.css";
import LoginSocials from "./LoginSocials";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.Login_Head}>
        <div className={styles.Login_LogoContainer}>
          <Image
            className={styles.Login_Logo}
            src={"/img/smartpocket.svg"}
            alt="money"
            width={114}
            height={114}
          />
        </div>
        <div className={styles.Login_TitleContainer}>
          <h1 className={styles.Login_Title}>Smart Pocket</h1>
        </div>
      </div>
      <div className={styles.Login_Body}>
        <LoginForm />
      </div>
      <hr
        style={{
          width: "70%",
          borderTop: "1px dotted #690571",
          borderBottom: "none",
          marginBlock: "21px",
        }}
      />
      <div className={styles.Login_Body}>
        <LoginSocials />
      </div>
    </div>
  );
};

export default Login;
