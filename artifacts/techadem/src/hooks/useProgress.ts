import { useState } from "react";

export function useProgress(courseKey: string) {
  const storageKey = `techadem_progress_${courseKey}`;

  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const markDayComplete = (day: number) => {
    setCompletedDays((prev) => {
      if (prev.includes(day)) return prev;
      const next = [...prev, day].sort((a, b) => a - b);
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  };

  const progressPercent = Math.min(100, Math.round((completedDays.length / 7) * 100));
  const isDayComplete = (day: number) => completedDays.includes(day);

  return { completedDays, markDayComplete, progressPercent, isDayComplete };
}
