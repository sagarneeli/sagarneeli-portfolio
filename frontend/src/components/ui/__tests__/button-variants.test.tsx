import { buttonVariants } from "../button";

describe("buttonVariants", () => {
  it("supports all variants", () => {
    expect(buttonVariants({ variant: "default" })).toMatch(/bg-primary/);
    expect(buttonVariants({ variant: "destructive" })).toMatch(/bg-destructive/);
    expect(buttonVariants({ variant: "outline" })).toMatch(/border-input/);
    expect(buttonVariants({ variant: "secondary" })).toMatch(/bg-secondary/);
    expect(buttonVariants({ variant: "ghost" })).toMatch(/hover:bg-accent/);
    expect(buttonVariants({ variant: "link" })).toMatch(/hover:underline/);
  });

  it("supports all sizes", () => {
    expect(buttonVariants({ size: "sm" })).toMatch(/h-9/);
    expect(buttonVariants({ size: "lg" })).toMatch(/h-11/);
    expect(buttonVariants({ size: "icon" })).toMatch(/w-10/);
  });
});

