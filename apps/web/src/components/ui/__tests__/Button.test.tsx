import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Button, ButtonLink } from "../Button";

describe("Button component", () => {
  it("Render Component", async () => {
    const onClick = jest.fn();

    render(<Button text="test" onClick={onClick} />);
    const btn = screen.getByText("test");

    await userEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(btn).toBeVisible();
    expect(btn).toBeInTheDocument();
  });
});

describe("ButtonLink component", () => {
  it("Render Component", () => {
    render(<ButtonLink text="test" href="/" />);
    const btn = screen.getByText("test");

    expect(btn).toBeVisible();
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("href", "/");
  });
});
