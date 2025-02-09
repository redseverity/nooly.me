import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../Button";

describe("Button component", () => {
  it("Render Component", () => {
    render(<Button>test</Button>);
    const btn = screen.getByText("test");

    fireEvent.click(btn);

    expect(btn).toBeVisible();
    expect(btn).toBeInTheDocument();
  });
});
