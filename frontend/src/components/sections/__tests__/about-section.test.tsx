import { render, screen } from "@testing-library/react";
import { AboutSection } from "../about-section";

describe("AboutSection", () => {
  it("renders heading and content", () => {
    render(<AboutSection />);
    expect(screen.getByText(/About Me/)).toBeInTheDocument();
  });
});
