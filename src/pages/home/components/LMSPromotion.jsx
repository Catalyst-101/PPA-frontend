import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, CheckCircle, Bell } from 'lucide-react';

export default function LMSPromotion() {
  const [appNotificationIndex, setAppNotificationIndex] = useState(0);

  const appNotifications = [
    { title: "🔔 Physics Homework", body: "New assignment added: Thermodynamics. Due Friday." },
    { title: "📈 Mid-Term Results", body: "Math Result: 94/100 (Grade A+). Click to view details." },
    { title: "🚌 Transit Update", body: "Bus Route 4 has left University Town. ETA 2:35 PM." },
    { title: "📢 Principal's Message", body: "Tomorrow will be a colorful clothes day for junior wing." }
  ];

  useEffect(() => {
    const notifyTimer = setInterval(() => {
      setAppNotificationIndex((prev) => (prev + 1) % appNotifications.length);
    }, 3800);
    return () => clearInterval(notifyTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="py-20 px-6 container mx-auto max-w-6xl"
    >
      <div className="bg-primary text-white rounded-[32px] shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 md:p-16 border border-white/5">
        {/* Decorative Backdrops */}
        <div className="absolute -bottom-36 -left-36 w-80 h-80 rounded-full bg-secondary/15 blur-[80px] pointer-events-none"></div>
        <div className="absolute -top-36 -right-36 w-96 h-96 rounded-full bg-[#4361ee]/20 blur-[100px] pointer-events-none"></div>

        {/* Column A: App Info & Stores */}
        <div className="lg:col-span-7 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
            <Smartphone className="w-3.5 h-3.5" />
            Smart Campus Link
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
            Pen & Page LMS <br className="hidden md:inline" />& Mobile App
          </h2>

          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-light">
            Bridging communications and learning. Our custom Parent-Student Portal provides live grade reports, daily attendance tallies, homework sheets, and direct messages with teachers right in your pocket.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-lg">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm font-sans font-medium">Real-time Grades & Scores</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm font-sans font-medium">RFID-Linked Attendance</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm font-sans font-medium">Downloadable Assignments</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="text-sm font-sans font-medium">Direct Admin Chat Support</span>
            </div>
          </div>

          {/* Simulated App Store CTA Buttons */}
          <div className="flex flex-wrap gap-4 w-full">
            {/* App Store */}
            <a href="#download" className="bg-slate-900 border border-white/10 hover:border-secondary transition-all rounded-xl py-2 px-5 flex items-center gap-3 hover:-translate-y-0.5 transform shadow-md shadow-black/10 select-none">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.09.08 2.21-.57 2.94-1.39z" />
              </svg>
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-white/50">Download on the</span>
                <span className="block text-sm font-bold text-white">App Store</span>
              </div>
            </a>

            {/* Play Store */}
            <a href="#download" className="bg-slate-900 border border-white/10 hover:border-secondary transition-all rounded-xl py-2 px-5 flex items-center gap-3 hover:-translate-y-0.5 transform shadow-md shadow-black/10 select-none">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.01 1.43c-.22.22-.38.54-.38.96v20.22c0 .42.16.74.38.96l.11.11L16.2 12.6v-.2L5.12 1.32l-.11.11zM18.77 10.05l-3.32-1.89-3.23 3.23 3.23 3.23 3.32-1.89c.95-.54.95-1.42 0-1.96zM11.23 12.44L14.7 8.97l-2.48-1.41-3.69 5.37.03.03 2.44-.52zM8.56 12.92l3.66 5.33 2.48-1.41-3.47-3.47-2.67-.45z" />
              </svg>
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-white/50">Get it on</span>
                <span className="block text-sm font-bold text-white">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Column B: Interactive CSS Phone Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10 w-full">
          <div className="w-[280px] h-[550px] bg-slate-955 border-[8px] border-slate-800 rounded-[42px] shadow-2xl relative overflow-hidden flex flex-col justify-between p-3 select-none">

            {/* Notch camera */}
            <div className="w-24 h-4 bg-slate-800 rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-30"></div>

            {/* App UI Header */}
            <div className="flex justify-between items-center px-2.5 pt-4 pb-2.5 border-b border-white/5 z-20 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-secondary text-primary font-serif font-black text-[10px] rounded-md flex items-center justify-center">
                  PP
                </div>
                <span className="text-[11px] font-serif font-bold text-white tracking-wide">Pen & Page</span>
              </div>
              <div className="relative">
                <Bell className="w-4 h-4 text-white/70" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </div>

            {/* App UI Scroll Area */}
            <div className="flex-grow flex flex-col gap-4 py-4 px-1 overflow-hidden z-20 text-left">

              {/* Simulated Student Profile */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop"
                  alt="Student Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-secondary/20"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">Ahmad Ali</h4>
                  <span className="text-[9px] text-white/60">Class 10 - Matric</span>
                </div>
              </div>

              {/* Simulated Attendance Widget (Conic Circle) */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between shrink-0">
                <div>
                  <span className="text-[9px] text-white/50 block font-semibold">ATTENDANCE</span>
                  <span className="text-sm font-serif font-bold text-white">96% Present</span>
                  <span className="text-[9px] text-emerald-400 block mt-1">Excellent Status</span>
                </div>

                {/* Conic progress path in SVG */}
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-secondary"
                      strokeWidth="3.2"
                      strokeDasharray="96, 100"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 0.96 }}
                      transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute text-[8px] text-white font-bold font-sans">96%</span>
                </div>
              </div>

              {/* Simulated Grade Analytics Chart */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] text-white/50 font-semibold block">MIDTERM GRADES</span>
                  <span className="text-[8px] text-secondary">View Report</span>
                </div>
                <div className="flex justify-around items-end h-16 pt-2 gap-2">
                  {/* Math Bar */}
                  <div className="flex flex-col items-center flex-grow">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "92%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-4 bg-secondary/85 rounded-t-sm"
                    />
                    <span className="text-[7px] text-white/70 mt-1">Math</span>
                  </div>
                  {/* Physics Bar */}
                  <div className="flex flex-col items-center flex-grow">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "95%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
                      className="w-4 bg-blue-500/85 rounded-t-sm"
                    />
                    <span className="text-[7px] text-white/70 mt-1">Phys</span>
                  </div>
                  {/* Chemistry Bar */}
                  <div className="flex flex-col items-center flex-grow">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "88%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      className="w-4 bg-purple-500/85 rounded-t-sm"
                    />
                    <span className="text-[7px] text-white/70 mt-1">Chem</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Simulated Popup Notifications at bottom of phone */}
            <div className="h-16 relative w-full px-1 overflow-hidden z-25 shrink-0 flex items-center justify-center">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={appNotificationIndex}
                  initial={{ y: 35, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -30, opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute w-full p-2 bg-secondary border border-secondary-fixedDim rounded-lg text-primary flex items-start gap-2 shadow-lg"
                >
                  <div className="bg-primary text-white p-1 rounded-md shrink-0">
                    <Bell className="w-3 h-3" />
                  </div>
                  <div className="overflow-hidden">
                    <h5 className="text-[9px] font-bold tracking-wide leading-none mb-0.5">
                      {appNotifications[appNotificationIndex].title}
                    </h5>
                    <p className="text-[8px] text-primary/80 line-clamp-1 leading-tight font-sans">
                      {appNotifications[appNotificationIndex].body}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-2 shrink-0 z-20"></div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
