import { render, screen } from "@testing-library/react";
import { SkillsSection } from "../skills-section";

describe("SkillsSection", () => {
  it("renders heading and a category", () => {
    render(<SkillsSection />);
    expect(screen.getByText(/Skills & Technologies/)).toBeInTheDocument();
    expect(screen.getByText(/Backend & Cloud/)).toBeInTheDocument();
  });
});

