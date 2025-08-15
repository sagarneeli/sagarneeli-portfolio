import { render, screen } from "@testing-library/react";
import { Header } from "../header";

describe("Header", () => {
  it("renders logo, navigation, and actions", () => {
    render(<Header />);

    // Brand name
    expect(screen.getByText(/Sagar Neeli/)).toBeInTheDocument();

    // Navigation items are links
    ["About", "Experience", "Projects", "Skills", "Contact"].forEach(
      (name) => {
        expect(screen.getByRole("link", { name })).toBeInTheDocument();
      },
    );

    // Resume button (desktop action)
    expect(screen.getByRole("button", { name: /resume/i })).toBeInTheDocument();
  });
});
