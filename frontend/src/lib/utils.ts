import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

// Returns the duration between two dates as years and months
export function calculateDuration(
  startDate: Date,
  endDate: Date | null,
): { years: number; months: number } {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();
  const dayDiff = end.getDate() - start.getDate();

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
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  if (years === 0) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  } else {
    return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
  }
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
