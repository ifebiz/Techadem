import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReminderModal } from "@/components/ReminderModal";

interface VideoLessonProps {
  id: string;
  dayNumber: number;
  title: string;
  videoUrl: string;
  encouragementText: string;
  isComplete?: boolean;
  onComplete?: () => void;
  courseKey?: string;
  showReminder?: boolean;
  isLast?: boolean;
  label?: string;
}

export function VideoLesson({
  id,
  dayNumber,
  title,
  videoUrl,
  encouragementText,
  isComplete = false,
  onComplete,
  courseKey = "general",
  showReminder = false,
  isLast,
  label,
}: VideoLessonProps) {
  const [showReminderModal, setShowReminderModal] = useState(false);
  const displayLabel = label ?? `Day ${dayNumber}`;

  return (
    <>
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-primary-foreground font-bold text-xs tracking-wide">
                {displayLabel}
              </span>
              {isComplete && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Complete
                </span>
              )}
            </div>
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

          <p className="text-base text-foreground/75 leading-relaxed mb-5">
            {encouragementText}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {!isComplete && onComplete && (
              <button
                onClick={onComplete}
                data-testid={`btn-complete-day-${dayNumber}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Mark Day {dayNumber} as Complete
              </button>
            )}

            {showReminder && !isLast && (
              <button
                onClick={() => setShowReminderModal(true)}
                data-testid={`btn-reminder-day-${dayNumber}`}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-primary/40 hover:bg-primary/5 text-foreground/70 hover:text-primary font-medium rounded-xl transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Set reminder for tomorrow
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {showReminderModal && (
        <ReminderModal
          dayNumber={dayNumber}
          courseKey={courseKey}
          onClose={() => setShowReminderModal(false)}
        />
      )}
    </>
  );
}
