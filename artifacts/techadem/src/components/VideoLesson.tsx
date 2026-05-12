import React from "react";
import { motion } from "framer-motion";

interface VideoLessonProps {
  id: string;
  dayNumber: number;
  title: string;
  videoUrl: string;
  encouragementText: string;
  onNextDay?: () => void;
  isLast?: boolean;
  label?: string;
}

export function VideoLesson({
  id,
  dayNumber,
  title,
  videoUrl,
  encouragementText,
  onNextDay,
  isLast,
  label,
}: VideoLessonProps) {
  const displayLabel = label ?? `Day ${dayNumber}`;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl shadow-md border overflow-hidden mb-12 scroll-mt-24"
      data-testid={`video-lesson-${dayNumber}`}
    >
      <div className="p-6 md:p-8 border-b bg-primary/5">
        <div className="flex items-center gap-3 mb-1">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-primary-foreground font-bold text-xs tracking-wide">
            {displayLabel}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mt-2">
          {title}
        </h2>
      </div>

      <div className="p-6 md:p-8">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted mb-6">
          <iframe
            src={videoUrl}
            title={title}
            allowFullScreen
            scrolling="no"
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-base text-foreground/75 leading-relaxed flex-1">
            {encouragementText}
          </p>

          {!isLast && onNextDay && (
            <button
              onClick={onNextDay}
              data-testid={`btn-next-day-${dayNumber}`}
              className="w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              Next Day
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
