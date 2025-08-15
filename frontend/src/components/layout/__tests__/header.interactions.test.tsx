import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Header } from "../header";

// Helpers
const setScrollY = (y: number) => {
  Object.defineProperty(window, "scrollY", { value: y, writable: true });
};

describe("Header interactions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("applies scrolled styles after window scroll", async () => {
    render(<Header />);

    const header = document.querySelector("header");
    expect(header).toBeInTheDocument();

    setScrollY(20);
    await act(async () => {
      await Promise.resolve(); // let useEffect attach listeners
      window.dispatchEvent(new Event("scroll"));
    });

    // When scrolled, header gains translucent background classes
    await waitFor(() =>
      expect(header?.className).toMatch(/bg-white\/80|dark:bg-slate-900\/80/),
    );
  });

  it("opens mobile menu and reveals Download Resume", async () => {
    render(<Header />);

    // Locate the mobile toggle button by finding a button within an element that has md:hidden
    const allButtons = screen.getAllByRole("button");
    const containerButton = allButtons.find((btn) =>
      (btn.parentElement?.className || "").includes("md:hidden"),
    );
    expect(containerButton).toBeTruthy();
    const container = containerButton!.parentElement as HTMLElement;
    const buttonsInContainer = Array.from(
      container.querySelectorAll("button"),
    ) as HTMLButtonElement[];
    const mobileToggle = buttonsInContainer.find(
      (b) => b.getAttribute("aria-label") !== "Toggle theme",
    );

    expect(mobileToggle).toBeTruthy();
    if (!mobileToggle) return; // type guard

    // Before opening, mobile-only label shouldn't exist
    expect(screen.queryByText(/Download Resume/i)).toBeNull();

    act(() => {
      fireEvent.click(mobileToggle);
    });

    // After opening, the mobile menu contains "Download Resume"
    await waitFor(() =>
      expect(screen.getByText(/Download Resume/i)).toBeInTheDocument(),
    );
  });

  it("scrolls to About when clicking nav", () => {
    const scrollIntoView = jest.fn();
    jest.spyOn(document, "querySelector").mockImplementation((sel: string) => {
      if (sel === "#about") {
        return { scrollIntoView } as unknown as Element;
      }
      return null;
    });

    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "About" }));
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
