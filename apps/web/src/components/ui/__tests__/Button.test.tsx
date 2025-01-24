import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, ButtonLink } from "../Button";

describe("Button component", () => {
  it("Render Component", () => {
    render(<Button children="test" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});

describe("ButtonLink component", () => {
  it("Render Component", () => {
    render(<ButtonLink children="test" link="/" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
