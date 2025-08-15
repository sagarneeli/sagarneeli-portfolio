import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from "../footer";

describe("Footer quick links", () => {
  it("scrolls to sections when clicking quick links", () => {
    const scrollIntoView = jest.fn();

    jest
      .spyOn(document, "getElementById")
      .mockImplementation((_id: string) => {
        if (_id) {
          // no-op: ensure parameter is used for linting
        }
        return ({ scrollIntoView } as unknown) as HTMLElement;
      });

    render(<Footer />);

    ["About", "Experience", "Projects", "Skills", "Contact"].forEach(
      (name) => {
        fireEvent.click(screen.getByText(name));
      },
    );

    expect(scrollIntoView).toHaveBeenCalled();
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
