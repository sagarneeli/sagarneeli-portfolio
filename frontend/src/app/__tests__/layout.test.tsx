import { render, screen } from "@testing-library/react";
import RootLayout from "../layout";

// Mock next/font to avoid side effects in tests
jest.mock("next/font/google", () => ({
  Inter: () => ({ className: "mocked-inter" }),
}));

describe("RootLayout", () => {
  it("renders the provided children", () => {
    render(
      <RootLayout>
        <div>content</div>
      </RootLayout>,
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
