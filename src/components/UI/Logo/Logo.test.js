import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Logo from "./Logo";

describe("Logo component", () => {
  test("renders the logo and text", () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const logoContainer = screen.getByRole("link");
    const logoImg = screen.getByAltText("Kieran McKelvie");
    const logoText = screen.getByText("McKelvie.dev");

    expect(logoContainer).toBeInTheDocument();
    expect(logoImg).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
  });
});
