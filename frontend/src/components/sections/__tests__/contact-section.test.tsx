import { render, screen } from "@testing-library/react";
import { ContactSection } from "../contact-section";

describe("ContactSection", () => {
  it("renders contact headings", () => {
    render(<ContactSection />);
    expect(screen.getByText(/Let's Connect/)).toBeInTheDocument();
    expect(screen.getByText(/Get In Touch/)).toBeInTheDocument();
  });
});

