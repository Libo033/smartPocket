import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { createMockRouter } from "../__mocks__/createMockRouter";
import Recover_password from "@/app/recover_password/page";

describe("RECOVER_PASSWORD PAGE", () => {
  beforeEach(() => {
    render(<Recover_password />);
  });

  it("Tiene que tener su titulo y subtitulo", () => {
    expect(
      screen.getByRole("heading", {
        name: /registrate/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /No te preocupes\, te mandaremos las instrucciones para que cambies tu costraseña\./i,
      })
    ).toBeInTheDocument();
  });

  it("Tiene que tener el link para volver a el login", async () => {
    const router = createMockRouter({
      pathname: "/recover_password",
    });

    const linkLogin = screen.getByRole("link", {
      name: /volver a iniciar sesion\!/i,
    });

    expect(linkLogin).toBeInTheDocument();

    await userEvent.click(linkLogin);
    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/", "/");
  });

  it("Tiene que tener el boton de recuperar contraseña", () => {
    expect(
      screen.getByRole("button", { name: /recuperar contraseña/i })
    ).toBeInTheDocument();
  });

  it("Tiene que tener el form para ingresar el email", () => {
    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });
});
