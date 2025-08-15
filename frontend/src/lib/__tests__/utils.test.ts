import {
  cn,
  formatDate,
  calculateDuration,
  truncateText,
  generateId,
} from "../utils";

describe("Utility Functions", () => {
  describe("cn", () => {
    it("combines class names correctly", () => {
      expect(cn("class1", "class2")).toBe("class1 class2");
    });

    it("handles conditional classes", () => {
      expect(cn("base", { conditional: true, hidden: false })).toBe(
        "base conditional",
      );
    });

    it("handles undefined and null values", () => {
      expect(cn("base", undefined, null, "valid")).toBe("base valid");
    });

    it("handles empty strings", () => {
      expect(cn("base", "", "valid")).toBe("base valid");
    });
  });

  describe("formatDate", () => {
    it("formats date correctly", () => {
      const date = new Date("2023-01-15");
      expect(formatDate(date)).toBe("January 2023");
    });

    it("handles different date formats", () => {
      const date = new Date("2023-12-01");
      expect(formatDate(date)).toBe("December 2023");
    });
  });

  describe("calculateDuration", () => {
    it("calculates duration between two dates", () => {
      const startDate = new Date("2020-01-01");
      const endDate = new Date("2023-01-01");
      const duration = calculateDuration(startDate, endDate);

      expect(duration.years).toBe(3);
      expect(duration.months).toBe(0);
    });

    it("handles same month and year", () => {
      const startDate = new Date("2023-01-01");
      const endDate = new Date("2023-01-31");
      const duration = calculateDuration(startDate, endDate);

      expect(duration.years).toBe(0);
      expect(duration.months).toBe(0);
    });

    it("handles current date when endDate is null", () => {
      const startDate = new Date("2023-01-01");
      const duration = calculateDuration(startDate, null);

      // Should have some duration (depends on current date)
      expect(duration.years).toBeGreaterThanOrEqual(0);
      expect(duration.months).toBeGreaterThanOrEqual(0);
    });
  });

  describe("truncateText", () => {
    it("truncates text to specified length", () => {
      const text = "This is a very long text that needs to be truncated";
      const truncated = truncateText(text, 20);

      expect(truncated.length).toBeLessThanOrEqual(23); // 20 + '...'
      expect(truncated).toContain("...");
    });

    it("returns original text if shorter than limit", () => {
      const text = "Short text";
      const truncated = truncateText(text, 20);

      expect(truncated).toBe(text);
    });

    it("handles empty string", () => {
      expect(truncateText("", 10)).toBe("");
    });
  });

  describe("generateId", () => {
    it("generates unique IDs", () => {
      const id1 = generateId();
      const id2 = generateId();

      expect(id1).not.toBe(id2);
      expect(typeof id1).toBe("string");
      expect(id1.length).toBe(9);
    });

    it("generates IDs with correct format", () => {
      const id = generateId();
      expect(id).toMatch(/^[a-z0-9]{9}$/);
    });
  });
});
