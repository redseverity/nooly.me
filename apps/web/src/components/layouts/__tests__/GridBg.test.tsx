import { render } from "@testing-library/react";
import { GridBg } from "../GridBg";
import "@testing-library/jest-dom";

describe("GridBg component", () => {
  it("render canvas", () => {
    const { container } = render(<GridBg dark={true} />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });
});
