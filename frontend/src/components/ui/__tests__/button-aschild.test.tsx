import { render, screen } from "@testing-library/react";
import { Button } from "../button";

describe("Button asChild", () => {
  it("renders Slot child and applies classes", () => {
    render(
      <Button asChild>
        <a href="#" data-testid="link-child">
          Link
        </a>
      </Button>,
    );

    const link = screen.getByTestId("link-child");
    expect(link).toBeInTheDocument();
    // Should receive styling classes from buttonVariants default
    expect(link.getAttribute("class") || "").toMatch(/inline-flex/);
  });
});
