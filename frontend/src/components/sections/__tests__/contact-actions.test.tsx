import { fireEvent, render, screen } from "@testing-library/react";
import { ContactSection } from "../contact-section";

describe("ContactSection actions", () => {
  const openSpy = jest.fn();
  beforeAll(() => {
    Object.defineProperty(window, "open", { value: openSpy, writable: true });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("opens resume in new tab on click", () => {
    render(<ContactSection />);
    fireEvent.click(screen.getByRole("button", { name: /download resume/i }));
    expect(openSpy).toHaveBeenCalledWith("/resume.pdf", "_blank");
  });

  it("opens mailto link on click", () => {
    render(<ContactSection />);
    fireEvent.click(screen.getByRole("button", { name: /send email/i }));
    expect(openSpy).toHaveBeenCalledWith("mailto:sagarneeli1191@gmail.com", "_blank");
  });
});

