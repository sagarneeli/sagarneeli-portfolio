import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeToggle } from "../theme-toggle";

// Provide a different mock where current theme is light
const mockSetTheme = jest.fn();
jest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: mockSetTheme,
    themes: ["light", "dark", "system"],
  }),
}));

describe("ThemeToggle light branch", () => {
  beforeEach(() => mockSetTheme.mockClear());

  it("switches to dark when current theme is light", () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("button", { name: /toggle theme/i }));
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });
});
