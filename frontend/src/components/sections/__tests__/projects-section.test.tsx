import { render, screen } from "@testing-library/react";
import { ProjectsSection } from "../projects-section";

describe("ProjectsSection", () => {
  it("renders heading and a project item", () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/Featured Projects/)).toBeInTheDocument();
    expect(screen.getByText(/Next-Gen CMS Platform/)).toBeInTheDocument();
  });
});
