import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function toLocalDate(date: string | Date): Date {
  if (date instanceof Date) return date;
  const [y, m, d] = date.split("-").map(Number);
  if (!y || !m || !d) return new Date(date);
  return new Date(y, m - 1, d);
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(toLocalDate(date));
}

// Returns the duration between two dates as years and months
export function calculateDuration(
  startDate: Date,
  endDate: Date | null,
): { years: number; months: number } {
  const start = startDate instanceof Date ? startDate : toLocalDate(startDate);
  const end = endDate ? (endDate instanceof Date ? endDate : toLocalDate(endDate)) : new Date();

  const yearDiff = end.getUTCFullYear() - start.getUTCFullYear();
  const monthDiff = end.getUTCMonth() - start.getUTCMonth();
  const dayDiff = end.getUTCDate() - start.getUTCDate();

  let totalMonths = yearDiff * 12 + monthDiff;
  if (dayDiff < 0) {
    totalMonths--;
  }

  if (totalMonths < 0) {
    return { years: 0, months: 0 };
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
}

export function formatDuration(startDate: string, endDate?: string) {
  const { years, months } = calculateDuration(
    toLocalDate(startDate),
    endDate ? toLocalDate(endDate) : null,
  );

  if (years === 0) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  }
  if (months === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }
  return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
