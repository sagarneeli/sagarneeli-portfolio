import { render, screen } from "@testing-library/react";
import { Logo } from "../Logo";

describe("Logo", () => {
  it("renders SVG with accessible label", () => {
    render(<Logo size={32} />);
    expect(screen.getByLabelText(/Sagar Neeli monogram/i)).toBeInTheDocument();
  });
});
