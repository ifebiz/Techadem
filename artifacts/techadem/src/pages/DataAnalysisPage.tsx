import React from "react";
import { motion } from "framer-motion";
import { VideoLesson } from "@/components/VideoLesson";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const encouragingTexts = [
  "Great start! 👍",
  "Well done, you've completed this lesson 👏",
  "You're making progress 🚀",
  "Awesome work! Keep going 🔥",
  "You're getting closer to mastering this skill 💪",
  "Keep it up, you're doing great! ⭐",
  "One step closer to your goal 🎯",
  "Almost there, you're crushing it! 💥"
];

const lessons = [
  { title: "Introduction to Data Analysis", id: "lesson-1" },
  { title: "Excel Basics for Data Analysis", id: "lesson-2" },
  { title: "Understanding Data Types", id: "lesson-3" },
  { title: "Data Cleaning Techniques", id: "lesson-4" },
  { title: "Introduction to Pivot Tables", id: "lesson-5" },
  { title: "Data Visualization Basics", id: "lesson-6" },
  { title: "Introduction to Python for Data", id: "lesson-7" },
  { title: "Building Your First Dashboard", id: "lesson-8" },
];

export default function DataAnalysisPage() {
  const scrollToLesson = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-card border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-4">
                Beginner Series
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground tracking-tight mb-6">
                Master Data Analysis <br/> From Zero
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl">
                Data is the new oil. In this beginner-friendly course, you'll learn how to collect, clean, analyze, and visualize data to make informed decisions. No prior coding or math experience is needed — we start from the very basics and build up your skills step by step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            {lessons.map((lesson, index) => {
              const lessonNumber = index + 1;
              const textIndex = index % encouragingTexts.length;
              const isLast = index === lessons.length - 1;
              
              return (
                <React.Fragment key={lesson.id}>
                  <VideoLesson
                    id={lesson.id}
                    lessonNumber={lessonNumber}
                    title={lesson.title}
                    videoId="dQw4w9WgXcQ"
                    encouragementText={encouragingTexts[textIndex]}
                    isLast={isLast}
                    onNextLesson={() => {
                      if (!isLast) {
                        scrollToLesson(lessons[index + 1].id);
                      }
                    }}
                  />
                  
                  {/* WhatsApp Interventions */}
                  {lessonNumber === 5 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="bg-card border-l-4 border-[#25D366] rounded-r-xl p-6 md:p-8 mb-12 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-2">Need help with Pivot Tables?</h3>
                        <p className="text-foreground/70">Our tutors are available to answer any questions you might have.</p>
                      </div>
                      <WhatsAppButton text="Ask Questions on WhatsApp" />
                    </motion.div>
                  )}
                  
                  {lessonNumber === 7 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-2">You're doing amazing!</h3>
                        <p className="text-foreground/70">Connect with other learners taking this same journey.</p>
                      </div>
                      <WhatsAppButton text="Join Our Learning Community" />
                    </motion.div>
                  )}
                  
                  {lessonNumber === 8 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-foreground text-card rounded-2xl p-8 md:p-12 mb-12 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        You've completed the Data Analysis beginner series 🎉
                      </h2>
                      <p className="text-card/80 text-lg max-w-2xl mx-auto mb-8">
                        Congratulations on taking this huge step in your tech career! You now have a solid foundation in data analysis. The next step is putting these skills into practice with real-world projects.
                      </p>
                      <WhatsAppButton text="Ready for Advanced Training?" />
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
            
          </div>
        </div>
      </section>
    </div>
  );
}
