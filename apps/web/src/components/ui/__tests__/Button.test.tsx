import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";

describe("Button component", () => {
  it("Render Component", async () => {
    const onClick = jest.fn();

    render(<Button children="test" onClick={onClick} />);
    const btn = screen.getByText("test");

    await userEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(btn).toBeVisible();
    expect(btn).toBeInTheDocument();
  });
});
