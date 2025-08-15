import { render, screen } from "@testing-library/react";
import { ExperienceSection } from "../experience-section";

describe("ExperienceSection", () => {
  it("renders heading and an experience item", () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/Experience/)).toBeInTheDocument();
    expect(screen.getByText(/HubSpot/)).toBeInTheDocument();
  });
});

