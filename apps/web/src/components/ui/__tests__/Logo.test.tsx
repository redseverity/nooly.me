import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "../Logo";

describe("Logo component", () => {
  it("Render Component", async () => {
    render(<Logo />);


    expect(screen.getByRole("none")).toBeVisible();
    expect(screen.getByRole("none")).toBeInTheDocument();
  });
});
