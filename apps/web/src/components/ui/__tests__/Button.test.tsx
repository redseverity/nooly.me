import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Button, ButtonLink } from "../Button";

describe("Button component", () => {
  it("Render Component", async () => {
    const onClick = jest.fn();

    render(<Button text="test" onClick={onClick} />);
    const btn = screen.getByRole("button", { name: "test" });

    await userEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(btn).toBeVisible();
    expect(btn).toBeInTheDocument();
  });
});

describe("ButtonLink component", () => {
  it("Render Component", () => {
    render(<ButtonLink text="test" link="/" />);
    const btn = screen.getByRole("link", { name: "test" });

    expect(btn).toBeVisible();
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("href", "/");
  });
});
