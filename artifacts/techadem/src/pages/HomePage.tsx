import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const testimonials = [
  {
    name: "Chinedu O.",
    role: "Data Analyst Student",
    quote: "Techadem made learning Data Analysis so straightforward. The short videos were perfect for my busy schedule, and now I'm building my own dashboards!"
  },
  {
    name: "Aisha M.",
    role: "Cybersecurity Student",
    quote: "I always thought tech was too complex, but the beginner-friendly approach here changed my mindset. The community support is also amazing."
  },
  {
    name: "Tunde B.",
    role: "Career Changer",
    quote: "The quality of these lessons is incredible. I went from zero knowledge to understanding how to protect networks in just a few weeks."
  }
];

const features = [
  {
    title: "Bite-Sized Lessons",
    description: "Learn at your own pace with short, focused video lessons designed specifically for beginners.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Expert Guidance",
    description: "Created by industry professionals who know exactly what skills employers are looking for right now.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Community Support",
    description: "Never learn alone. Join our WhatsApp community to ask questions, share progress, and stay motivated.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-foreground tracking-tight leading-tight mb-6">
                Learn Future-Proof <span className="text-primary relative whitespace-nowrap">
                  Tech Skills
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span> From Anywhere
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Beginner-friendly video lessons in Data Analysis and Cybersecurity designed to help you start your tech journey.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/data-analysis" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Start Data Analysis
                </Link>
                <Link href="/cybersecurity" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-foreground border-2 border-border font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center">
                  Start Cybersecurity
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Learn With Techadem?</h2>
            <p className="text-foreground/70 text-lg">We've stripped away the complexity to give you exactly what you need to succeed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Loved by Nigerian Learners</h2>
            <p className="text-foreground/70 text-lg">Join hundreds of students taking their first steps in tech.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 relative"
              >
                <svg className="absolute top-6 right-6 w-8 h-8 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground/80 leading-relaxed mb-6 relative z-10 font-medium">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                  <span className="text-sm text-primary font-medium">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">Ready to Start Learning?</h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Choose your path and dive into your first lesson today. No previous experience required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/data-analysis" className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                Explore Data Analysis
              </Link>
              <Link href="/cybersecurity" className="w-full sm:w-auto px-8 py-4 bg-primary-foreground/10 text-white border-2 border-white/20 font-bold rounded-lg shadow-sm hover:bg-primary-foreground/20 transition-all duration-300 transform hover:-translate-y-1 text-center">
                Explore Cybersecurity
              </Link>
            </div>
            
            <div className="mt-12 flex justify-center">
              <WhatsAppButton text="Have questions? Chat with us" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
