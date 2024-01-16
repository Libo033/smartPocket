import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { createMockRouter } from "../__mocks__/createMockRouter";
import Recover_password from "@/app/recover_password/page";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe("RECOVER_PASSWORD PAGE", () => {
  it("Tiene que tener su titulo y subtitulo", () => {
    render(<Recover_password />);

    expect(
      screen.getByRole("heading", {
        name: "Olvidaste tu contraseña?",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "No te preocupes, te mandaremos las instrucciones para que cambies tu costraseña.",
      })
    ).toBeInTheDocument();
  });

  it("Tiene que tener el link para volver a el login", async () => {
    const router = createMockRouter();
    render(
      <AppRouterContext.Provider value={router}>
        <Recover_password />
      </AppRouterContext.Provider>
    );

    const linkLogin = screen.getByRole("link", {
      name: /volver a iniciar sesion!/i,
    });

    expect(linkLogin).toBeInTheDocument();

    await userEvent.click(linkLogin);
    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/", { scroll: true });
  });

  it("Tiene que tener el boton de recuperar contraseña", () => {
    render(<Recover_password />);

    expect(
      screen.getByRole("button", { name: "Recuperar contraseña" })
    ).toBeInTheDocument();
  });

  it("Tiene que tener el form para ingresar el email", () => {
    render(<Recover_password />);

    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });
});
