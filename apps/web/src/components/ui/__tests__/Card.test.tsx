import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "../Card";

describe("Logo component", () => {
  it("Render Component", async () => {
    render(<Card />);
    expect(screen.getByRole("group")).toBeInTheDocument();
  });
});
