import React, { useId } from "react";

const RegisterForm = () => {
  const $name = useId();
  const $subName = useId();
  const $email = useId();
  const $password = useId();
  const $repeatPassword = useId();

  return (
    <div>
      <div>
        <div>
          <label htmlFor={$name}>Nombre</label>
          <input type="text" id={$name} />
        </div>
        <div>
          <label htmlFor={$subName}>Apellido</label>
          <input type="text" id={$subName} />
        </div>
      </div>
      <div>
        <label htmlFor={$email}>Email</label>
        <input type="text" id={$email} />
      </div>
      <div>
        <label htmlFor={$password}>Contraseña</label>
        <input type="text" id={$password} />
      </div>
      <div>
        <label htmlFor={$repeatPassword}>Repetir contraseña</label>
        <input type="text" id={$repeatPassword} />
      </div>
      <button>registrate</button>
    </div>
  );
};

export default RegisterForm;
