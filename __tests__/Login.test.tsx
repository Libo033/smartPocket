import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { createMockRouter } from "../__mocks__/createMockRouter";

describe("LOGIN PAGE", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("Deberia tener el nombre de la app como titulo", () => {
    expect(
      screen.getByRole("heading", {
        name: /smart pocket/i,
      })
    ).toBeInTheDocument();
  });

  it("Deberia tener un h2 descriptivo de la app", () => {
    expect(
      screen.getByRole("heading", {
        name: /controla tus gastos de manera sencilla y ahorra para tus proximos objetivos/i,
      })
    ).toBeInTheDocument();
  });

  it("Deberia tener el formulario de iniciar sesion", () => {
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/contraseña/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /iniciar sesion/i })
    ).toBeInTheDocument();
  });

  it("Deberia tener los links de redireccion a recuperar contraseña", async () => {
    const router = createMockRouter({
      pathname: "/",
    });

    const recover_password = screen.getByRole("link", {
      name: /olvidaste tu contraseña\?/i,
    });

    expect(recover_password).toBeInTheDocument();

    await userEvent.click(recover_password);
    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith(
      "/recover_password",
      "/recover_password"
    );
  });

  it("Deberia tener los links de redireccion a register", async () => {
    const router = createMockRouter({
      pathname: "/",
    });

    const register = screen.getByRole("link", {
      name: /no tenes una cuenta\? registrate\!/i,
    });

    expect(register).toBeInTheDocument();

    await userEvent.click(register);
    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/register", "/register");
  });

  it("Deberia tener las opciones de login con google y facebook", () => {
    expect(
      screen.getByRole("button", { name: /facebook/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /google/i })).toBeInTheDocument();
  });
});
