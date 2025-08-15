import { render, screen } from "@testing-library/react";
import { Footer } from "../footer";

describe("Footer", () => {
  it("renders key sections and links", () => {
    render(<Footer />);

    // Brand and sections
    expect(screen.getByText(/Quick Links/)).toBeInTheDocument();
    expect(screen.getByText(/Connect/)).toBeInTheDocument();

    ["About", "Experience", "Projects", "Skills", "Contact"].forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
