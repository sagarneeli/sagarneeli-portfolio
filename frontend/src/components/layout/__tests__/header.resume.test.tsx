import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../header";

describe("Header resume actions", () => {
  const openSpy = jest.fn();
  beforeAll(() => {
    Object.defineProperty(window, "open", { value: openSpy, writable: true });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("opens resume from desktop action", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: /resume/i }));
    expect(openSpy).toHaveBeenCalledWith("/resume.pdf", "_blank");
  });
});

