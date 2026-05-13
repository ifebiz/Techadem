import React, { useState } from "react";
import { motion } from "framer-motion";
import { VideoLesson } from "@/components/VideoLesson";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ReminderModal } from "@/components/ReminderModal";
import { useProgress } from "@/hooks/useProgress";
import { usePageTitle } from "@/hooks/usePageTitle";

const COURSE_KEY = "data-analysis";
const WA_LINK = "https://wa.me/2349044399437";
const WA_ENROLL = "https://wa.me/2349044399437";

const days = [
  {
    id: "day-1",
    dayNumber: 1,
    title: "Day One: What Is Data Analysis",
    videoUrl: "https://go.screenpal.com/player/cOhiIxntjCj",
    encouragementText:
      "Well done for completing Day 1. Most people never even start. You have taken the first step.",
  },
  {
    id: "day-2",
    dayNumber: 2,
    title: "Day Two: The Tools of a Data Analyst",
    videoUrl: "https://go.screenpal.com/player/cOhi2FntjsT",
    encouragementText:
      "You are building momentum. Try not to skip days. Consistency is key.",
  },
  {
    id: "day-3",
    dayNumber: 3,
    title: "Day Three: Data Handling",
    videoUrl: "https://go.screenpal.com/player/cOhio6ntjWN",
    encouragementText:
      "Are you enjoying this so far? You are beginning to see how this works in real life.",
  },
  {
    id: "day-4",
    dayNumber: 4,
    title: "Day Four: Data Cleaning",
    videoUrl: "https://go.screenpal.com/player/cOhi6RntjFD",
    encouragementText:
      "At this point, you should start asking yourself if you can see yourself doing this long term.",
  },
  {
    id: "day-5",
    dayNumber: 5,
    title: "Day Five: Basic Data Analysis",
    videoUrl: "https://go.screenpal.com/player/cOhilKntj4o",
    encouragementText:
      "This is where most people start dropping off. Stay with it. You are doing well.",
  },
  {
    id: "day-6",
    dayNumber: 6,
    title: "Day Six: Simple Data Visualization",
    videoUrl: "https://go.screenpal.com/player/cOhiokntQhc",
    encouragementText: "You are almost done. Not many people get here.",
  },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function DataAnalysisPage() {
  usePageTitle("Data Analysis Course — Techadem");
  const { completedDays, markDayComplete, progressPercent, isDayComplete } =
    useProgress(COURSE_KEY);
  const [showDay7Reminder, setShowDay7Reminder] = useState(false);

  const handleComplete = (dayNumber: number, nextId: string) => {
    markDayComplete(dayNumber);
    setTimeout(() => scrollTo(nextId), 150);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* SECTION 1: Hero */}
      <section className="bg-primary text-white pt-16 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold tracking-wide mb-6">
                Introductory Class
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold leading-tight mb-6">
                Techadem 7-Day Data Analysis Introductory Class
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
                Learn the fundamentals, test your interest, and understand how to start your journey in tech the right way.
              </p>
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-4">
                <span className="text-2xl">🎁</span>
                <p className="text-white font-medium text-sm md:text-base">
                  You stand a chance of winning a laptop when you join our 7-Day Challenge
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What You Will Learn */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                What You Will Learn
              </h2>
              <ul className="space-y-4">
                {[
                  "Understanding what Data Analysis really is",
                  "Tools used by Data Analysts",
                  "How data is cleaned and interpreted",
                  "How beginners start and grow",
                  "Career paths and opportunities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-foreground/80 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why This Class Matters */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
                Why This Class Matters
              </h2>
              <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-4">
                This class helps you understand if this path is right for you, before you invest time and money into learning fully.
              </p>
              <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                You are testing your interest and your consistency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Video Flow */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Your 7-Day Journey
            </h2>

            {/* Progress Bar */}
            <div className="mb-10 bg-card rounded-2xl border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground/70">Your Progress</span>
                <span className="text-sm font-bold text-primary">{progressPercent}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <p className="text-xs text-foreground/45 mt-2">
                {completedDays.length} of 7 days complete
                {progressPercent === 100 && " — Well done for finishing the full 7-Day Class."}
              </p>
            </div>

            {/* Days 1 to 6 */}
            {days.map((day, index) => (
              <React.Fragment key={day.id}>
                <VideoLesson
                  id={day.id}
                  dayNumber={day.dayNumber}
                  title={day.title}
                  videoUrl={day.videoUrl}
                  encouragementText={day.encouragementText}
                  isComplete={isDayComplete(day.dayNumber)}
                  onComplete={() =>
                    handleComplete(
                      day.dayNumber,
                      index < days.length - 1 ? days[index + 1].id : "day-7"
                    )
                  }
                  courseKey={COURSE_KEY}
                  showReminder={true}
                  isLast={false}
                />

                {/* WhatsApp prompt after Day 5 */}
                {day.dayNumber === 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-card border-l-4 border-[#25D366] rounded-r-xl p-6 md:p-8 mb-12 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                  >
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground mb-1">
                        Do you have questions at this point?
                      </h3>
                      <p className="text-foreground/65 text-sm">
                        Our team is available to answer anything on your mind before you continue.
                      </p>
                    </div>
                    <WhatsAppButton text="Ask Questions on WhatsApp" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}

            {/* Day 7 */}
            <motion.div
              id="day-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl shadow-md border overflow-hidden mb-12 scroll-mt-24"
              data-testid="video-lesson-7"
            >
              <div className="p-6 md:p-8 border-b bg-primary/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-primary-foreground font-bold text-xs tracking-wide">
                    Day 7
                  </span>
                  {isDayComplete(7) && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Complete
                    </span>
                  )}
                </div>
                <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mt-2">
                  Day Seven: Putting It Together
                </h2>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted">
                  <iframe
                    src="https://go.screenpal.com/player/cOhiDYntQX8"
                    title="Day Seven: Putting It Together"
                    allowFullScreen
                    scrolling="no"
                    className="absolute top-0 left-0 w-full h-full border-0"
                  ></iframe>
                </div>

                <p className="text-base text-foreground/75 leading-relaxed">
                  You have completed the 7-Day Introductory Class.
                </p>

                {!isDayComplete(7) && (
                  <button
                    onClick={() => markDayComplete(7)}
                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Mark Day 7 as Complete
                  </button>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Completion Message */}
      <section className="py-16 bg-primary/5 border-y">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-4xl mb-6 block">🎉</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 leading-snug">
                You made it this far.
              </h2>
              <div className="space-y-4 text-foreground/70 text-base md:text-lg leading-relaxed text-left">
                <p>This already puts you ahead of 93% of people who start and never finish. You should be proud of yourself.</p>
                <p>You have shown signs of consistency, focus, and willingness to learn.</p>
                <p>It is safe to say you can start your journey in Data Analysis.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Gift Video */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                A Gift From Us To You
              </h2>
              <p className="text-foreground/65 text-base mb-8">
                This video will guide you on what to do next and how to move forward properly.
              </p>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted shadow-md">
                <iframe
                  src="https://go.screenpal.com/player/cOhjlGntXOR"
                  title="A Gift From Us To You"
                  allowFullScreen
                  scrolling="no"
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Course Transition */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-foreground/75 text-base md:text-lg leading-relaxed"
            >
              <p>At this point, you are no longer starting from scratch.</p>
              <p>You already understand the basics.</p>
              <p>If you decide to go deeper, you will be learning with structure, guidance, and real direction.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Discount */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <span className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-sm">
                %
              </span>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                Because you completed this class, you are eligible for a 30% discount on our full course.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Ready to go further?
            </h2>
            <p className="text-white/75 text-base md:text-lg mb-10 leading-relaxed">
              Join the full Data Analysis programme and build skills that can open real doors for you.
            </p>
            <a
              href={WA_ENROLL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="btn-enroll-data-analysis"
              className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Enroll Now
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
