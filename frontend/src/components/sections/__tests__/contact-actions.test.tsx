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

  it("has resume link that opens in new tab", () => {
    render(<ContactSection />);
    const resumeLink = screen.getByRole("link", { name: /download resume/i });
    expect(resumeLink).toHaveAttribute("href", "/resume.pdf");
    expect(resumeLink).toHaveAttribute("target", "_blank");
  });

  it("opens mailto link on click", () => {
    render(<ContactSection />);
    fireEvent.click(screen.getByRole("button", { name: /send email/i }));
    expect(openSpy).toHaveBeenCalledWith(
      "mailto:sagarneeli1191@gmail.com",
      "_blank",
    );
  });
});
