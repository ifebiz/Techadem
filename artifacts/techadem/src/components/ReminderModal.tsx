import React, { useState } from "react";

interface ReminderModalProps {
  dayNumber: number;
  courseKey: string;
  onClose: () => void;
}

const nextDayMessages: Record<number, string> = {
  1: "Day 2 is waiting for you. You started strong — keep that momentum going.",
  2: "Your Day 3 lesson is ready. Consistency is what separates those who make it.",
  3: "Day 4 is here. You are more than halfway through this journey.",
  4: "Almost there. Day 5 will take you even further.",
  5: "Day 6 is waiting. You are so close to the finish line.",
  6: "Day 7 is the final stretch. Come back and complete what you started.",
};

export function ReminderModal({ dayNumber, courseKey, onClose }: ReminderModalProps) {
  const [time, setTime] = useState("09:00");
  const [status, setStatus] = useState<"idle" | "success" | "denied">("idle");

  const nextDay = dayNumber + 1;
  const message = nextDayMessages[dayNumber] ?? `Day ${nextDay} is waiting for you.`;

  const handleSet = async () => {
    if (!("Notification" in window)) {
      saveAndSucceed();
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "denied") {
      setStatus("denied");
      return;
    }

    saveAndSucceed();
  };

  const saveAndSucceed = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [hours, minutes] = time.split(":").map(Number);
    tomorrow.setHours(hours, minutes, 0, 0);

    const existing = JSON.parse(localStorage.getItem("techadem_reminders") || "[]");
    const filtered = existing.filter(
      (r: { courseKey: string; day: number }) =>
        !(r.courseKey === courseKey && r.day === dayNumber)
    );
    filtered.push({
      courseKey,
      day: dayNumber,
      nextDay,
      time,
      scheduledFor: tomorrow.toISOString(),
      message,
    });
    localStorage.setItem("techadem_reminders", JSON.stringify(filtered));
    setStatus("success");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8">
        {status === "success" ? (
          <div className="text-center">
            <span className="text-5xl mb-4 block">🔔</span>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              Reminder Saved
            </h3>
            <p className="text-foreground/70 mb-2 leading-relaxed">
              We will remind you tomorrow at{" "}
              <span className="font-semibold text-primary">{time}</span> when you open Techadem.
            </p>
            <p className="text-sm text-foreground/45 mb-8 leading-relaxed">
              Open the app at that time and your reminder notification will appear.
            </p>
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Done
            </button>
          </div>
        ) : status === "denied" ? (
          <div className="text-center">
            <span className="text-5xl mb-4 block">🔕</span>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              Notifications are Blocked
            </h3>
            <p className="text-foreground/70 mb-8 text-sm leading-relaxed">
              Please allow notifications in your browser settings, then try again.
            </p>
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-display font-bold text-foreground mb-1">
              Remind me for Day {nextDay}
            </h3>
            <p className="text-foreground/60 text-sm mb-6 leading-relaxed">{message}</p>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                What time should we remind you tomorrow?
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <p className="text-xs text-foreground/40 mb-6 leading-relaxed">
              The reminder will appear when you open Techadem at or after this time.
            </p>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-border rounded-xl text-foreground font-medium hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSet}
                className="flex-1 px-4 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Set Reminder
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
