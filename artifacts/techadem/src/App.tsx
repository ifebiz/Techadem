import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import HomePage from "@/pages/HomePage";
import DataAnalysisPage from "@/pages/DataAnalysisPage";
import CybersecurityPage from "@/pages/CybersecurityPage";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const queryClient = new QueryClient();

function checkDueReminders() {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  try {
    const reminders: Array<{
      courseKey: string;
      day: number;
      nextDay: number;
      scheduledFor: string;
      message: string;
    }> = JSON.parse(localStorage.getItem("techadem_reminders") || "[]");

    const now = new Date();
    const stillPending: typeof reminders = [];

    for (const reminder of reminders) {
      const scheduled = new Date(reminder.scheduledFor);
      const diffMs = now.getTime() - scheduled.getTime();
      // Fire if within 4 hours past the scheduled time
      if (diffMs >= 0 && diffMs < 4 * 60 * 60 * 1000) {
        new Notification(`Techadem — Time for Day ${reminder.nextDay}`, {
          body: reminder.message,
          icon: "/logo.png",
        });
      } else if (diffMs < 0) {
        // Not yet due — keep it
        stillPending.push(reminder);
      }
      // If more than 4 hours past, discard silently
    }

    localStorage.setItem("techadem_reminders", JSON.stringify(stillPending));
  } catch {
    // Fail silently
  }
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/data-analysis" component={DataAnalysisPage} />
      <Route path="/cybersecurity" component={CybersecurityPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    checkDueReminders();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
          </div>
          <FloatingWhatsApp />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
