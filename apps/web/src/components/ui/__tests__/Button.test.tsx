import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Button } from "../Button";

describe("Button component", () => {
    it("Render Component", () => {
        render(<Button>test</Button>)
        expect(screen.getByText("test")).toBeInTheDocument()
    })
})