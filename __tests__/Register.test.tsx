import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { createMockRouter } from "../__mocks__/createMockRouter";
import Register from "@/app/register/page";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe("REGISTER PAGE", () => {
  it("Tiene que tener su titulo", () => {
    render(<Register />);

    expect(
      screen.getByRole("heading", {
        name: /registrate/i,
      })
    ).toBeInTheDocument();
  });

  it("Tiene que tener el form para registrarse", () => {
    render(<Register />);

    expect(screen.getByText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByText(/apellido/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText("Contraseña")).toBeInTheDocument();
  });

  it("Tiene que tener el link para volver a el login", async () => {
    const router = createMockRouter();
    render(
      <AppRouterContext.Provider value={router}>
        <Register />
      </AppRouterContext.Provider>
    );

    const linkLogin = screen.getByRole("link", {
      name: /ya tenes cuenta\? inicia sesion\!/i,
    });

    expect(linkLogin).toBeInTheDocument();

    await userEvent.click(linkLogin);
    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/", { scroll: true });
  });

  it("Tiene que tener el boton de registrarse", () => {
    render(<Register />);

    expect(
      screen.getByRole("button", { name: /registrate/i })
    ).toBeInTheDocument();
  });
});
