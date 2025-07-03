import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function getTechColor(tech: string): string {
  const colors: Record<string, string> = {
    react: "text-blue-400",
    "next.js": "text-black dark:text-white",
    typescript: "text-blue-600",
    javascript: "text-yellow-400",
    node: "text-green-600",
    python: "text-blue-500",
    tailwind: "text-cyan-500",
    mongodb: "text-green-500",
    postgresql: "text-blue-700",
    docker: "text-blue-500",
    git: "text-orange-600",
  };
  
  return colors[tech.toLowerCase()] || "text-gray-400";
} 