import React from "react";
import { motion } from "framer-motion";

interface VideoLessonProps {
  id: string;
  lessonNumber: number;
  title: string;
  videoId: string;
  encouragementText: string;
  onNextLesson?: () => void;
  isLast?: boolean;
}

export function VideoLesson({
  id,
  lessonNumber,
  title,
  videoId,
  encouragementText,
  onNextLesson,
  isLast
}: VideoLessonProps) {
  return (
    <motion.div 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl shadow-md border overflow-hidden mb-12 scroll-mt-24"
    >
      <div className="p-6 md:p-8 border-b">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
            {lessonNumber}
          </span>
          <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
            {title}
          </h2>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted mb-6">
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}`} 
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-medium text-foreground/80 flex-1">
            {encouragementText}
          </p>
          
          {!isLast && onNextLesson && (
            <button 
              onClick={onNextLesson}
              className="w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-sm transition-colors"
            >
              Next Lesson
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
