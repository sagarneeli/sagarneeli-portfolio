import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../theme-provider";

describe("ThemeProvider", () => {
  it("renders its children", () => {
    render(
      <ThemeProvider attribute="class">
        <div>child</div>
      </ThemeProvider>,
    );
    expect(screen.getByText("child")).toBeInTheDocument();
  });
});
