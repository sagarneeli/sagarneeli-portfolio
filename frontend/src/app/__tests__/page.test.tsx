import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("renders the main content", () => {
    render(<Home />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
