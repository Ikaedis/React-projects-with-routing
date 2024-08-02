// utils/dateFormatter.test.js
import { describe, it, expect } from "vitest";
import { formatDate } from "./dateFormatter";

describe("formatDate", () => {
  it("returns a string in the format YYYY-MM-DD", () => {
    const testCases = [
      new Date(2023, 0, 1), // January 1, 2023
      new Date(2023, 11, 31), // December 31, 2023
      new Date(2024, 1, 29), // February 29, 2024 (leap year)
      new Date(2025, 5, 15), // June 15, 2025
    ];

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    testCases.forEach((testDate) => {
      const formattedDate = formatDate(testDate);
      expect(formattedDate).toMatch(dateRegex);

      // Parse the formatted date
      const [year, month, day] = formattedDate.split("-").map(Number);

      // Check if the parsed values match the original date
      expect(year).toBe(testDate.getFullYear());
      expect(month).toBe(testDate.getMonth() + 1);
      expect(day).toBe(testDate.getDate());
    });
  });

  it("pads single-digit months and days with leading zeros", () => {
    const testDate = new Date(2023, 0, 1); // January 1, 2023
    const formattedDate = formatDate(testDate);
    expect(formattedDate).toBe("2023-01-01");
  });

  it("handles leap years correctly", () => {
    const leapYearDate = new Date(2024, 1, 29); // February 29, 2024
    const formattedDate = formatDate(leapYearDate);
    expect(formattedDate).toBe("2024-02-29");
  });
});
