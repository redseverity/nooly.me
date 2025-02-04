import { render, act } from "@testing-library/react";
import { GridBg } from "../GridBg/GridBg";
import "@testing-library/jest-dom";

describe("GridBg component", () => {
  // Mock
  beforeAll(() => {
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
      value: jest.fn().mockReturnValue({
        clearRect: jest.fn(),
        beginPath: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        stroke: jest.fn(),
      }),
    });
  });

  const testDrawOnCanvas = () => {
    const { container } = render(<GridBg />);
    const canvas = container.querySelector("canvas");
    const ctx = canvas?.getContext("2d");

    act(() => {
      const canvasElement = canvas as HTMLCanvasElement;
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    });

    expect(canvas).toBeInTheDocument();
    expect(ctx?.clearRect).toHaveBeenCalled();
    expect(ctx?.beginPath).toHaveBeenCalled();
    expect(ctx?.moveTo).toHaveBeenCalled();
    expect(ctx?.lineTo).toHaveBeenCalled();
    expect(ctx?.stroke).toHaveBeenCalled();
  };

  it("Render and draw on canvas", () => {
    testDrawOnCanvas();
  });
});
